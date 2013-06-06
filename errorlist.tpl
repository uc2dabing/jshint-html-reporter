<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jshint Error List</title>
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/app.css" />
</head>
<body>
    <div class="container">

        <header>
            <h1>看一下你糟糕的javascript代码</h1>
            <p class="muted">采用<a href="http://www.jshint.com/">jshint</a>对代码进行静态检测，具体的检测配置见.jshintrc文件，具体error原因参考<a href="http://jslinterrors.com/">jshintError</a></p>
        </header>

        <div id="wrapper">
            
            <ul class="fileinfolist">
                <% for(var i = 0; i < files.length; i++) { %>

                    <li><a href="#<%= files[i].anchor %>"><%=  files[i].file %></a> <span class="text-error">(<%= files[i].errorlength %>)</span></li>

                <% } %>
            </ul>

            <ul>
               <% for(var i = 0; i < errors.length; i++) { %>

                    <% if(0==i) { %>

                        <!-- 区分文件显示  -->
                        <li class="header">
                            <h3><i class="icon-info-sign" name="<%= errors[i].anchor %>" id="<%= errors[i].anchor %>"></i><%= errors[i].file %></h3>
                        </li>

                    <% }else if(errors[i].file != errors[i-1].file){ %>
                        
                        <li class="header">
                             <h3><i class="icon-info-sign" name="<%= errors[i].anchor %>" id="<%= errors[i].anchor %>"></i><%= errors[i].file %></h3>
                        </li>

                    <% }%>

                    <li class="errorlist">
                        
                        <p>
                            <label class="label label-important">Line:<%= errors[i].error.line %></label>
                            <strong>:</strong>
                            <code class="info"><%= errors[i].error.evidence %></code>
                        <p>
                        
                        <p>
                            <label class="label">Reason</label>
                            <strong>:</strong>
                            <span class="info"><%= errors[i].error.reason %></span>
                        </p>
                        
                        <p>
                            <label class="label">ErrorCode</label>
                            <strong>:</strong>
                            <span class="info"><%= errors[i].error.code %></span>
                        </p>

                            
                    </li>

                <% } %>
            </ul>
        </div>

        <footer>
            
        </footer>
    </div>
</body>
</html>