'use client'
import { useEffect } from 'react'
import classes from './academic.module.css'
const page = () => {
   const ForceRender = () => {
        function wrapElement1(No:string) {
            const template = document.getElementById("w1")
            const wrapper = document.getElementById(template.id+"-"+No)
            Array.from(wrapper.getElementsByTagName("a")).forEach(element => {
                let temp = document.createElement("div")
                wrapper.replaceChild(temp,element)
                temp.className = template.className
                temp.innerHTML = template.innerHTML
                let child = temp.getElementsByTagName("a")[0]
                child.href = element.href
                child.innerHTML = element.innerHTML
        
            });
        }
        
        /* document.querySelectorAll("#w1-*").forEach((element,i){
            wrapElement1(i+1)
        }) */
        wrapElement1(1); wrapElement1(2); wrapElement1(3); wrapElement1(4);
        
        function wrapElement2(No){
            const template = document.getElementById("w2")
            const templateChild = template.getElementsByTagName("span")[0]
            const wrapper = document.getElementById(template.id+"-"+No)
            Array.from(wrapper.getElementsByTagName("p")).forEach(element => {
                let temp = document.createElement("div")
                wrapper.replaceChild(temp,element)
                temp.className = template.className
                let child = element.getElementsByTagName("span")[0]
                
                let text = element.lastChild.nodeValue
                let keyword = child.innerText
                let splitText = text.split(keyword)
                splitText.forEach((text,i) => {
                    let splitChild = document.createElement("span")
                    splitChild.innerHTML = text //use innerHTML to not have the <br> as innerText
                    temp.append(splitChild)
                    if (i < (splitText.length-1)){
                        let insertElement = document.createElement("span")
                        insertElement.innerText = keyword
                        insertElement.className = templateChild.className
                        temp.append(insertElement)
                        
                    }
                })
                temp.append(document.createElement("span"))
                // console.log(splitText)
            })
        }
        
       wrapElement2(1); wrapElement2(2);
        
        function wrapElement3(No){
            const template = document.getElementById("w3")
            const wrapper = document.getElementById(template.id+"-"+No)
            const listElement = wrapper.getElementsByTagName("p")
            let temp = document.createElement("div")
            temp.className = template.className
            temp.innerHTML = template.innerHTML
            let templateChild = temp.getElementsByTagName("li")[0]
            let templateList = temp.getElementsByTagName("ul")[0]
        
            Array.from(wrapper.getElementsByTagName("p")).forEach((element,i) => {
                let child=templateChild.cloneNode()
                templateList.append(child) //asynchronous append and cloneNode call two time between replace but 
                child.innerHTML = element.innerHTML
                element.remove()
            })
            templateChild.remove() //use if compare length not ok because the length change after each loop
            wrapper.append(temp)
        }
        
        wrapElement3(1);
        
    }

    useEffect(()=>{
        // ForceRender()
    },[])

    


    return(
<>
<button onClick={ForceRender} className="bg-blue my-4"> Click me</button>
<div id="w1" className={classes.wrp01}>
    <a target="_blank" ></a>
</div>

<div id="w2" className={classes.wrp02}>
    <span className={classes.keyword}></span>
    <span></span>
</div>

<div id="w3" className={classes.wrp03}>
    <ul className='flex-col'>
        <li></li>
    </ul>
</div>

<div id="w1-1">
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">Element</a>
    <span>log wrapper.children to see more. Element className inherit from Node className</span>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node">Node</a>
    <span> log wrapper.childNodes to see more</span>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild">Node replace child</a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren">Element Replace children
    </a>
</div>
<div id="w3-1">
    <p> replace the child of the template with a specific existing node and update the inner html</p>
    <p> copy a node </p>
    <p> how many ways to remove a child of a Element: outerHTML or remove?</p>
    <p> Element vs Node </p>
    <p> get the node according to the element </p>
</div>
<div id="w1-2">
    <a href="https://flask.palletsprojects.com/en/3.0.x/quickstart/#debug-mode">Quick http server python - debug mode</a>
    <a href="https://flask.palletsprojects.com/en/3.0.x/tutorial/factory/#application-setup">Flask Factory</a>
    <a href="https://laravel.com/docs/11.x/">Laravel</a>
</div>
<div id="w2-1">
    <p ><span>application factory</span><span>Flask Class</span>
        A Flask application is an instance of the Flask className. Everything about the application, such as configuration and URLs, will be registered with this className.
    The most straightforward way to create a Flask application is to create a global Flask instance directly at the top of your code, like how the “Hello, World!” example did on the previous page. While this is simple and useful in some cases, it can cause some tricky issues as the project grows.
    Instead of creating a Flask instance globally, you will create it inside a function. This function is known as the application factory. Any configuration, registration, and other setup the application needs will happen inside the function, then the application will be returned.
    </p>

    <p ><span>debug mode</span>
        The flask run command can do more than just start the development server. By enabling debug mode, the server will automatically reload if code changes, and will show an interactive debugger in the browser if an error occurs during a request.
    </p>
</div>
<div id="w1-4">
    <a href="https://spring.io/projects/spring-boot#overview">Spring Boot</a>
    <a href="https://spring.io/projects/spring-framework">Spring Framework</a>
</div>
<div id="w2-2">
    <p><span></span>
        The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform.

A key element of Spring is infrastructural support at the application level: Spring focuses on the "plumbing" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.

Support Policy and Migration
For information about minimum requirements, guidance on upgrading from earlier versions and support policies, please check out the official Spring Framework wiki page

Features
Core technologies: dependency injection, events, resources, i18n, validation, data binding, type conversion, SpEL, AOP.

Testing: mock objects, TestContext framework, Spring MVC Test, WebTestClient.

Data Access: transactions, DAO support, JDBC, ORM, Marshalling XML.

Spring MVC and Spring WebFlux web frameworks.

Integration: remoting, JMS, JCA, JMX, email, tasks, scheduling, cache and observability.

Languages: Kotlin, Groovy, dynamic languages.
    </p>
    <p> <span></span>
        Spring Boot helps you to create stand-alone, production-grade Spring-based applications that you can run. We take an opinionated view of the Spring platform and third-party libraries, so that you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.

        You can use Spring Boot to create Java applications that can be started by using java -jar or more traditional war deployments.
        
        Our primary goals are:
        
        Provide a radically faster and widely accessible getting-started experience for all Spring development.
        
        Be opinionated out of the box but get out of the way quickly as requirements start to diverge from the defaults.
        
        Provide a range of non-functional features that are common to large classes of projects (such as embedded servers, security, metrics, health checks, and externalized configuration).
        
        Absolutely no code generation (when not targeting native image) and no requirement for XML configuration.
    </p>
</div>

<div id="w1-3">
    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzQXJZsMwTwzTKrGgXXgJxlsLNWL">Vlance 09/10</a>
    <a href="https://www.vlance.vn/viec-freelance/chuyen-doi-ngon-ngu-cua-indicator-tu-pinescript-sang-mql4?utm_source=viec-moi&utm_medium=email&utm_campaign=job-newsletter-exact-20241009-day">
        Indicator, PineScript, MQL4
    </a>
    <a href="https://www.vlance.vn/viec-freelance/live-preview-cho-san-pham?utm_source=viec-moi&utm_medium=email&utm_campaign=job-newsletter-exact-20241009-day">
        wordpress, live preview
    </a>
    <a href="https://www.vlance.vn/viec-freelance/can-freelancer-lap-trinh-shopify-app-back-end?utm_source=viec-moi&utm_medium=email&utm_campaign=job-newsletter-exact-20241009-day">
        Shopify, Node, Remix
    </a>
    <a href="https://www.vlance.vn/viec-freelance/can-chuyen-video-dai-tam-30s-thanh-game-react-native-hoac-web-app?utm_source=viec-moi&utm_medium=email&utm_campaign=job-newsletter-exact-20241009-day">
        Video, React Native
    </a>
    <a href="https://www.vlance.vn/viec-freelance/can-viet-game-amination-don-gian-bang-react-native?utm_source=viec-moi&utm_medium=email&utm_campaign=job-newsletter-exact-20241009-day">
        Animation Game, React Native
    </a>
    <a href="https://www.vlance.vn/viec-freelance/thiet-ke-trang-web-44?utm_source=viec-moi&utm_medium=email&utm_campaign=job-newsletter-exact-20241009-day">
        Website sport
    </a>
    <a href="https://www.vlance.vn/viec-lam/test-build-va-xuat-ban-ung-dung-android-va-ios?utm_source=viec-moi&utm_medium=email&utm_campaign=job-newsletter-exact-20241009-day">
        React Native
    </a>

</div>

{/* <script src="test.js"></script> */}
</>
    )
}

export default page