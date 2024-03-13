module.exports = {
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,

            fs: false,
            output: "export",
            basePath: "/AssignStudentList",
        };

        return config;
    },
};
