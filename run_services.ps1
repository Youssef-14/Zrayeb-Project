# Get the current script directory
$currentScriptDirectory = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Open a new PowerShell window for a Angular application

Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command cd '$currentScriptDirectory\Zrayeb-FrontEnd'; npm install ; ng serve"

# Open a new PowerShell window for each Spring microservice

# Navigate to the first Spring microservice directory
Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command cd '$currentScriptDirectory\config-server'; ./mvnw spring-boot:run"

# Navigate to the second Spring microservice directory
Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command cd '$currentScriptDirectory\discovery'; ./mvnw spring-boot:run"

# Navigate to the third Spring microservice directory
Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command cd '$currentScriptDirectory\Auth-Service'; ./mvnw spring-boot:run"

# Navigate to the fourth Spring microservice director
Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command cd '$currentScriptDirectory\Tourisme-Durable'; ./mvnw spring-boot:run"

# Navigate to the fifth Spring microservice director
Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command cd '$currentScriptDirectory\gateway'; ./mvnw spring-boot:run"
