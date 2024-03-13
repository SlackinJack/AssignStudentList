import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";
import React, { useState, useEffect } from 'react';
import StudentsComponent from './StudentsComponent';
//import fs from 'fs';

export default function Students() {
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [grade, setGrade] = useState("");
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        checkForm();
    }, [name, dob, grade]);

    const checkForm = () => {
        let errors = {};

        if (!name) {
            errors.name = "Name is required.";
        } else if (!/\S+\ \S+/.test(name)) {
            errors.name = "Name should be in the format of: 'FirstName LastName'";
        }

        if (!dob) {
            errors.dob = "Date of birth is invalid.";
        }

        setErrors(errors);
        setIsValid(Object.keys(errors).length == 0);
    }

    const submitForm = () => {
        if (isValid) {
            console.log("Form has passed validation.");
            let newStudent = {
                name: { name },
                dob: { dob },
                grade: { grade }
            };
            // cant seem to write to json.
            const fs = require('fs');
            let data = fs.readFileSync('../students.json');
            let students = JSON.parse(data);
            students.push(newStudent);
            fs.writeFile('../students.json', JSON.stringify(students), function (error) {
                if (error) {
                    console.log(error);
                }
            });
        } else {
            console.log("Tried to submit an invalid form!");
        }
    }

    const styles = {
        error: {
            color: "red"
        }
    }

    return (
        <Layout>
            <Head>
                <title>New Generation High School</title>
                <meta name="description" content="Welcome to New Generation High School Portal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-bold title-font mb-4 text-gray-900 tracking-widest">Our Students</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <StudentsComponent/>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-bold title-font mb-4 text-gray-900 tracking-widest">Add New Student</h1>
                    </div>
                    <div class="max-w-lg mx-auto">
                        <form id="new-student-form" class="mb-6">
                            <div class="mb-4">
                                <label for="student-name" class="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                                <input
                                    type="text"
                                    id="student-name"
                                    name="student-name"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={styles.name}
                                />
                            </div>
                            {errors.name && <p style={styles.error}>{errors.name}</p>}
                            <div class="mb-4">
                                <label for="date-of-birth" class="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
                                <input
                                    type="date"
                                    id="date-of-birth"
                                    name="date-of-birth"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={dob}
                                    onChange={(e) => setDOB(e.target.value)}
                                    style={styles.dob}
                                />
                            </div>
                            {errors.dob && <p style={styles.error}>{errors.dob}</p>}
                            <div class="mb-6">
                                <label for="current-grade" class="block text-gray-700 text-sm font-bold mb-2">Current Grade:</label>
                                <select
                                    id="current-grade"
                                    name="current-grade"
                                    value={grade}
                                    onChange={(e) => setGrade(e.target.value)}
                                    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option value="9">9th Grade</option>
                                    <option value="10">10th Grade</option>
                                    <option value="11">11th Grade</option>
                                    <option value="12">12th Grade</option>
                                </select>
                            </div>
                            <div class="flex items-center justify-center">
                                <button
                                    disabled={!isValid}
                                    onClick={submitForm}
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Student</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}