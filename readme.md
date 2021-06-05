#### API 정보

할일 그룹 만들기, 할일 만들기(Todo App)
<br>
#### BASE URL

<span class="colour" style="color:rgb(80, 80, 80)">[http://localhost:3000/](http://localhost:3000/)</span>
<span class="colour" style="color:rgb(80, 80, 80)"></span>

- - -

### GROUP

##### Method

get/ <span class="colour" style="color:rgb(80, 80, 80)">GroupList (그룹 리스트 불러오기)</span>

##### Response 컨텐트 타입

json

##### Response 메세지 예

|  |
| --- |
| <span class="colour" style="color:rgb(0, 0, 0)">[</span><br><span class="colour" style="color:rgb(0, 0, 0)">    {</span><br><span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 134, 88)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span><br><span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"title"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"공부하기"</span><br><span class="colour" style="color:rgb(0, 0, 0)">    },</span><br><span class="colour" style="color:rgb(0, 0, 0)">    {</span><br><span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 134, 88)">3</span><span class="colour" style="color:rgb(0, 0, 0)">,</span><br><span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"title"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"놀기"</span><br><span class="colour" style="color:rgb(0, 0, 0)">    }</span><br><span class="colour" style="color:rgb(0, 0, 0)">]</span> |
<br>
##### Method

post/ GroupTodoList (그룹에 있는 할일 리스트 불러오기)

##### Request 컨텐트 타입

application/json

##### Request 예시

|  |
| --- |
| <span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">{</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"groupId"</span><span style="color: #000000;">:</span><span style="color: #0451a5;">"1"</span><br><span style="color: #000000;">}</span> |

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

|  |
| --- |
| <span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">[</span><br><span style="color: #000000;">    {</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"id"</span><span style="color: #000000;">: </span><span style="color: #098658;">1</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"noejs 공부"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"status"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"DONE"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"groupId"</span><span style="color: #000000;">: </span><span style="color: #098658;">1</span><br><span style="color: #000000;">    },</span><br><span style="color: #000000;">    {</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"id"</span><span style="color: #000000;">: </span><span style="color: #098658;">2</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"php 공부"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"status"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"noDONE"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"groupId"</span><span style="color: #000000;">: </span><span style="color: #098658;">1</span><br><span style="color: #000000;">    }</span><br><span style="color: #000000;">]</span> |
<br>
#### Method

post/ GroupAdd (그룹 추가하기)

##### Request 컨텐트 타입

application/json

##### Request 예시

|  |
| --- |
| <span style="color: #000000;">{</span><br><span style="color: #a31515;">   "title"</span><span style="color: #000000;">:</span><span style="color: #0451a5;">"회사"</span><br><span style="color: #000000;">}</span> |

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

|  |
| --- |
| <span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">{</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"id"</span><span style="color: #000000;">: </span><span style="color: #098658;">6</span><span style="color: #000000;">,</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"회사"</span><br><span style="color: #000000;">}</span> |

- - -

### TODO

##### Method

get/ TodoList (할일 리스트 불러오기)

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

|  |
| --- |
| <span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">[</span><br><span style="color: #000000;">    {</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"id"</span><span style="color: #000000;">: </span><span style="color: #098658;">1</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"noejs 공부"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"status"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"DONE"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"groupId"</span><span style="color: #000000;">: </span><span style="color: #098658;">1</span><br><span style="color: #000000;">    },</span><br><span style="color: #000000;">    {</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"id"</span><span style="color: #000000;">: </span><span style="color: #098658;">2</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"php 공부"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"status"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"noDONE"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"groupId"</span><span style="color: #000000;">: </span><span style="color: #098658;">1</span><br><span style="color: #000000;">    }</span><br><span style="color: #000000;">]</span> |
<br>
##### Method

get/ TodoDoneList(다 한일 리스트 불러오기)

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

|  |
| --- |
| <span style="color: #000000;"></span><span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">[</span><br><span style="color: #000000;">    {</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"id"</span><span style="color: #000000;">: </span><span style="color: #098658;">1</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"noejs 공부"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"status"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"DONE"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">        </span><span style="color: #a31515;">"groupId"</span><span style="color: #000000;">: </span><span style="color: #098658;">1</span><br><span style="color: #000000;">    }</span><br><span style="color: #000000;">]</span> |
<br>
#### Method

post/ TodoAdd(할일 추가하기)

##### Request 컨텐트 타입

application/json

##### Request 예시

|  |
| --- |
| <span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">{</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"아이폰13"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"status"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"DONE"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"groupId"</span><span style="color: #000000;">: </span><span style="color: #098658;">4</span><br><span style="color: #000000;">}</span> |

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

|  |
| --- |
| <span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">{</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"id"</span><span style="color: #000000;">: </span><span style="color: #098658;">3</span><span style="color: #000000;">,</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"아이폰13"</span><span style="color: #000000;">,</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"status"</span><span style="color: #000000;">: </span><span style="color: #0451a5;">"DONE"</span><br><span style="color: #000000;">}</span> |
<br>
#### Method

post/ TodoDone(할일 -> 완료한 일로 만들기)

##### Request 컨텐트 타입

application/json

##### Request 예시

|  |
| --- |
| <span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">{</span><br><span style="color: #000000;">    </span><span style="color: #a31515;">"title"</span><span style="color: #000000;">:</span><span style="color: #0451a5;">"laravel 공부"</span><br><span style="color: #000000;">}</span> |

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

|  |
| --- |
| <span class="colour" style="color: rgb(0, 0, 0);"></span><span style="color: #000000;">업데이트 성공</span> |