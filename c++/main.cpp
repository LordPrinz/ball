#include <iostream> 
#include <fstream> 
#include <string> 
  
 std::string trim(const std::string& s) { 
   const std::string whitespace = " \t\n\r\f\v"; 
   size_t begin = s.find_first_not_of(whitespace); 
   if (begin == std::string::npos) { 
     return std::string{}; 
   } 
   size_t end = s.find_last_not_of(whitespace); 
   return std::string{s.substr(begin, end - begin + 1)}; 
 } 
  
 int main(int argc, char **argv) { 
   if(argc< 2) { 
     std::cerr << "Keine Datei bereitgestellt"<<std::endl; 
     return 1; 
   } 
  
   std::ifstream inFile(argv[1]); 
   std::ofstream outFile("index.html"); 
  
   if (!inFile.is_open()) { 
     std::cerr << "Datei nicht gefunden"<<std::endl; 
     return 1; 
   } 
    
   outFile << "<!DOCTYPE html>\r<html lang='de'>\r<head>\r<meta charset='UTF-8' />\r<meta http-equiv='X-UA-Compatible' content='IE=edge' />\r    <meta name='viewport' content='width=device-width, initial-scale=1.0' />\r<title>"<<argv[1]<<"</title>\r</head>\r<body>"; 
    
   std::string line; 
   bool isULOpen = false; 
  
   while(std::getline(inFile, line)) { 
      
     const std::string trimmedLine = trim(line); 
  
     if(trimmedLine[0] == '*') { 
       outFile<<"<p>"<<trimmedLine.substr(2, trimmedLine.length())<<"</p>"<<std::endl; 
       continue; 
     } 
  
     if(trimmedLine[0] == '+') { 
       if(!isULOpen) { 
         outFile<<"<ul>"<<std::endl; 
       } 
       isULOpen = true; 
       outFile<<"<li>"<<trimmedLine.substr(2, trimmedLine.length())<<"</li>"<<std::endl; 
       continue; 
     } 
  
     if(isULOpen) { 
       outFile<<"</ul>"<<std::endl; 
       isULOpen = false; 
     } 
  
     if(trimmedLine.empty()) { 
       outFile<<"<br>"<<std::endl; 
       continue; 
     } 
  
     outFile<<line<<std::endl; 
  
   } 
   inFile.close(); 
   outFile<<"</body>\r</html>"; 
   outFile.close(); 
    
   return 0; 
 }