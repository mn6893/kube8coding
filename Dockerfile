# Use Java 17 JRE as the base image
FROM eclipse-temurin:17-jdk-jammy

# Copy the JAR file from the target directory to the container
COPY target/crud-0.0.1-SNAPSHOT.jar /app.jar

# Expose port 8080 for the application
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]