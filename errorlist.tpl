<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jshint Error List</title>
</head>
<body>
    
    <header>
        
    </header>

    <div id="wrapper">
        <ul>
           <% for(var i = 0; i < errors.length; i++) { %>
            
                <!-- 区分文件显示  -->
                <% if(0==i) { %>
                    <li class="header"><%= errors[i].file %></li>
                <% }else if(errors[i].file != errors[i-1].file){ %>
                    <li class="header"><%= errors[i].file %></li>
                <% }%>

                <li class="errorlist">
                    <p>Line:<%= errors[i].error.line %>&nbsp;&nbsp;<%= errors[i].error.evidence %><p>
                    <p>ErrorCode:<%= errors[i].error.code %>&nbsp;&nbsp;Reason:<%= errors[i].error.reason %></p>
                </li>

            <% } %>
        </ul>
    </div>

    <footer>
        
    </footer>

</body>
</html>