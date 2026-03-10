@echo off
set JAVA_HOME=D:\JDk
set PATH=%JAVA_HOME%\bin;%PATH%
call "C:\Users\EDY\.antigravity\extensions\vscjava.vscode-maven-0.45.1-universal\resources\maven-wrapper\mvnw.cmd" -f "D:\workCode\gym\gym-management-server\pom.xml" spring-boot:run -DskipTests
