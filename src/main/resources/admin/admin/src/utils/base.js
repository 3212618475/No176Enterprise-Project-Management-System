const base = {
    get() {
        return {
            url : "http://localhost:8080/qiyexiangmuguanlixitong/",
            name: "qiyexiangmuguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qiyexiangmuguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业项目管理系统"
        } 
    }
}
export default base
