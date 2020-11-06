exports.createPages = async function ({actions}) {
    actions.createPage({
        path: "my-path",
        component: require.resolve('./src/template/template.tsx'),
        context: {
            name: 'Usama',
            age: 22,
            designation: 'Software Engineer',
        },
    });
    
}