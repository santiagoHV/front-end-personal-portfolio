(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{113:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},136:function(e,t,a){},368:function(e,t,a){},369:function(e,t,a){},386:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(34),r=a.n(n),i=(a(113),a(24)),o=(a(114),a(115),a(131),a(106)),g=a(13),l=a(68),m=a(394),A=(a(132),a(3)),b=function(e){var t=Object(c.useState)([{title:"Home",route:"/home#header",isActive:!0},{title:"About me",route:"/home#about-me",isActive:!1},{title:"Study",route:"/home#",isActive:!1},{title:"Contact me",route:"/home#",isActive:!1}]),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)([{title:"Skills",route:"/skills",isActive:!1},{title:"Personal projects",route:"/",isActive:!1},{title:"Experience",route:"/",isActive:!1}]),o=Object(i.a)(r,2),g=o[0],b=o[1],d=Object(c.useState)(!1),j=Object(i.a)(d,2),u=j[0],h=j[1],p=function(e){return Object(A.jsx)("div",{className:"sidebar__items ".concat(u?"":"unToggleMovile"),children:e.map((function(e){return Object(A.jsx)("a",{className:"nav-link sidebar__items--item ".concat(e.isActive?"active":""),href:e.route,onClick:function(){O(e.title)},children:e.title})}))})},O=function(e){var t=Object(l.a)(s),a=Object(l.a)(g);t.forEach((function(t){t.isActive=t.title===e})),a.forEach((function(t){t.isActive=t.title===e})),n(t),b(a)};return Object(A.jsx)("div",{className:"sidebar ".concat(e.show?"":"unActive"),children:Object(A.jsxs)("div",{className:"sidebar__content",children:[Object(A.jsxs)(m.a.Brand,{className:"sidebar__logo-container",children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFBklEQVR4nO2cz4scRRTHP29dTcQsCiIGZCMa4o+THgImSBLPRnLTizdR/wAjogheVUguQo4BQb3EiAmIxI0h7MEoSDxENBGT9WdQ0ESyu2bdjZuvh2llnOnu6q6p7pnNvs9pqO5+9e33ul5VV1UPOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI6zqpF0l6TXJH0haU7NMCvpfUn3JtQ9KelgZrsJ5tTxyauS7kylu/sGxiS9ImmpoRvI46KkyQTaJyVdaFH3oqSXJVkK3yPJJL3V4g10cyCB/oND0v6mUgRB0gtDugFJupRAf1NppwrPhfSVRkjSeuAscNOgjojkkpndMogBSbPARCI9dZkDNprZb0UnjAUMPMnwnA/wUQIbxxLYiGWCjg8LCQXg0XRaanMB2J3AzovAHwnsxLKr7GBhACStAbYmlxNmFjgAPGhmPw9qzMy+AR4A3s1st82WzJf1kLQj0MH8JenGBgSvKCStkbQQ8NX2ouvLUtAjgbo/NbOFONnXDma2CHwWOK3Ql2UB2BEwOh04vpoI+SL0MP+frFldDjSrekavYSqk6wVJa1Ma9PzfRcUHNjejFKUgz/81GKQfiA2A5/9+Qj4J9akdVG1Y5fm/B0nbY/qB8RxbW4FQh3FcUhLhq4i1wEP0tJS8FPRwK3JWJ9t6C/ICkGwlyunjvt6CvADc3YKQ1co9vQWegtqlr88NTUc7abncW+ABaJe+lTEPQLt821vQeAAswACm93XZ2JdKb8Oc7S1YyS1gquv30aGpqEdfC+h7ApX4FTf0lEfW9zdwq5nNZjYm6KwhXx9hq002mNlP3QUrtQWc+Nf5AGY2R3g2ctgsAOd7C/MCMJew0tKNVdmTG0NeypnKKRslZszsam9hXgA+TlhpyNYdkXbznD3qAejL/5AfgJeAiwkqvJjZKmNjpN2TOeUnSaO7KfpGQJATgAT7aGaB94AtZpYb9S52Rtg/ZmbLvYVZ2TB3wYXI9UXeegDZhqgnmlQjaZzArrECylLNFPB4nKLGqdYCWuRp4vqAsgAcidTSBrktIM1HBDWRdDNwBlhf89IzZnZ/wPZpcubdh8wCsK7qKKhRJI0Bb1Pf+VBtt/QojobO5TkfWg5A5vw3gMciTVSZchjFAOTmfyjohJsgSzvvEDfyAVii2naY6ezcGyLraYLC0WDjLUDSuKRngdPEOx/gEzObD52UnXNigHqaoL0WIGkdMElnbXknnaFm7BtvN3VmPKeouyG2WQoDUDgKkrQB+KEROXFsNrO8N+A+JG0GPm9YTx0miz42KQvAGDAPjMIm3N+B24tGEr1k2n8FbmtUVTUKh6BQ0gdkF8w0paomR6s6H/7TPirTEoVDUAh3woW5q2VihpajMhwtnQ8LBSA0mdYWMVPkU8AobGAtfYhDATiVUEgsX8V8LWlm54GvG9BTly/LDoYCMA1Uzr0NcWiAaw8nUxHHVeB42QmlATCzH4EPUiqqyRKwf4Dr92c2hsXhUOut8ia8G/gzjZ7a7DGz72IvNrMZYG9CPXWYB55PYknSLrX7X0FS50+brkugfVzSoZa1L0oaZNol90a2Sfq+BfFXJL2uzopZKu3j6vzT15UW9J+T1MwOc3W+H3tG0hFJv0haTiR6XtIpSXslbWpEfEf/Jkl7srrmE2lfVscXH0p6StIozcI6juM4juM4juM4juM4juM4juM4juM4Q+Qf9e9zh+FoadwAAAAASUVORK5CYII=",height:50,width:50,alt:"logo"}),Object(A.jsx)("h3",{children:"Santiago Herrera"}),Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",className:"bi bi-list toggle-button",viewBox:"0 0 16 16",onClick:function(){h(!u)},children:Object(A.jsx)("path",{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})]}),p(s),p(g)]})})},d=a.p+"static/media/personal-photo.0b05cc3c.jpg",j=(a(136),a(390)),u=a(391),h=a(392),p=a(393),O=a(104),f=a.n(O),v=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},k=function(e){var t=e.showNav,a=Object(c.useState)(v().height*v().width*15e-5),s=Object(i.a)(a,2),n=s[0];s[1];return Object(A.jsxs)("div",{id:"header",children:[Object(A.jsxs)(j.a,{xs:11,md:6,className:"center-box",children:[Object(A.jsx)("div",{className:"center-box__background"}),Object(A.jsxs)(u.a,{fluid:!0,className:"center-box__content",children:[Object(A.jsx)(h.a,{children:Object(A.jsx)(j.a,{xs:10,sm:8,lg:7,xl:4,className:"m-auto photo_container",children:Object(A.jsx)(p.a,{src:d,fluid:!0,roundedCircle:!0,className:"photo"})})}),Object(A.jsx)(h.a,{className:"center-box--text",children:Object(A.jsx)(j.a,{xs:12,md:10,className:"m-auto",children:Object(A.jsx)("h2",{children:"DEVELOPER IN DEVELOPMENT"})})}),Object(A.jsx)(h.a,{children:Object(A.jsxs)("div",{className:"logo-container",children:[Object(A.jsx)("img",{alt:"Facebook link",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAABmJLR0QA/wD/AP+gvaeTAAAEqElEQVR4nO3dzWtcVRzG8e9zlVpBbEUQq7EoVsEWShdVElKotCGoiOBG8B8QDHYRunclgiC2UmrduXMt1BespkTFNEYqQQzUl6JNmoILS/pmk4rz6+JOkplkbjIvd+aczP19djP3zpmHPMydmXMz54ommNn9wEFgP7ATeBK4B7i3mfG60FXgOvAbMAV8A4xIutzoQGpkZzMbBIaA54FNjT5Zwd0CPgdOSDpV74PqKsjM9gFHgL3NZXMrTADDksbW23HNgszsbtJiXltvX9cwA04AhyXNZ+2U+Uc3s+3ASWB3/tlchUngJUkztTbWLMjMngJOAT1tDOaWzQCDks6t3LCqIDPrAb4HtncgmFs2C/RLulB5Z1VB5feccfywFsok0Ff5npSs2OE9vJyQ9gDvVt6x9Aoys37gO/zTWmglYJ+kM1Bd0I/495xYjEvqg/IhrjxD4OXEo9fMBmD5PWgoYBhX2+sAKk98XsLn1mKzAGxLSGelvZz43AUcSEhPGbg4PZsAu0KncJl2JsDjoVO4TDsSYGvoFC7TVpnZ/6ye8nFxKMnMLHSKwErAWWCUdLLyPHARuCFprtHBzOxP4NG8wt2Z10Ab0N/AMeAjSZdCh8lSxIIMeB94U9K10GHWU7SC5oFXJX0SOki9ilRQCXhF0snQQRpRpE9vb220cqA4BZ0H3g4dohlFKegdSQuhQzSjCAX9C3wcOkSzilDQV5JuhA7RrCIUNBE6QCuKUNDZ0AFaUYTvQT+3OoCZ7QbeAJ4GtrD2GYAtrT5fpSJMlm6S9F+zDzazvaT/L7g5v0j16/ZD3M1Wyik7RKByoPsLuprDGDtyGKNp3V7QzRzGCPq7224vKA/BDm/gBdUj6N/IC4qcF7S+oD/H8YIi5wWtL+grqFumeq4A/9S4/2IOY0+Tni6vRw85/xChW6Z6jkoaDh3CzKaBR/Ic0w9xOTGzO4BteY/rBeXnQdrwluEF5actq7J4QfnxgiLnBUXu4XYM6gXlx19BkfOCIucFxcrMBDzUjrG9oHw8QLrwRO66ZS4uy1+SHmtlgLx/c9oofwVFzguKnBcUOS8ocl5Q5LygyHlBkfOCIucFRc4LipwXFDkvKHJeUOS8oMh5QZHzgiLnBUXOC4qcFxQ5LyhyXlDkvKDIeUGR84Ii5wVFzguKnBcUuYT6F2lwnVdKSBf+dnG6ngANX2XKdcxcQnrhCRenPxLgl9ApXKapBPg2dAqXaTQBvgZuhU7iVlkATieSLgNfhE7jVvlU0pwAzGwQ+DJwIFdtQNLI0nKPZvYD8EzAQG7ZmKR+qJ7qOYTPKsSgBBxevLFUkKQJ4MMQiVyV45LGF29UrWhrZpuBM8CeTqdyAPwE9EuaX7yjaja7vOFF4EKHgzmYBV6uLAdqnG6QNAs8B8x0KJhLl34+KGl65Yaa54MknQP6gck2B3PLh7Vfa23MPGEnaQboA47jn+7aoQQcIy0ncwH2upa9N7Ne4AjQm0+2whsDhsufnNfU0HUJzGwAGAJeoE3Lb3WxBeAz4ANJI/U+qKkLR5jZfcABYD+wC3iC9FJiuV6icgO7Qnr9vN+BKWAUOC2p4ZOjtwGA/vjg/iyBLAAAAABJRU5ErkJggg==",className:"net-logos"}),Object(A.jsx)("img",{alt:"Instagram link",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAABmJLR0QA/wD/AP+gvaeTAAALMUlEQVR4nO2dbbBWVRXH/+sKIr6gmIqC2dvkKzSNTgqGjqaZDJljvjTWjBJan6wvCU5mivolQzMdx9EvommOQTFNXvOtRhRToPHlg1lAiop6xQ/yckEQgV8f9iEucJ+z9jnP2ed5eO7zn7lf7tl7rf9Z69nnnL33WmubEgEYLulkSadIOib7+6ykUZL2kzQyle5E2Chpg6R1kt6RtEzSUkmLJC0xsy0plFqVwoADJF0o6RJJp0nav0r5bYz1kp6TNFfSfDPrr0pwJQ4CTpB0taSLFUbHUMYGSfMkzTaz15sV1pSDgPGSbpJ0vqSeZsl0GLZJ+rOk683sX2WFlHIQsK+kmZJ+LmnvssqHCLZIulvSdWUefYUdBHxd0sOSjirad4jjHUnfN7N/FOkU/VgCDLhG0gJ1nVMGR0laAMwEogdGVENgL0n3SrqiJLkudsZDkqab2adeQ9dB2ftmrqSpJYhsUpgnLJD0msK8oU/SBjPbVEJeywDso/CFOlbS0ZImSDpD0kRJI0qIfEzSJWb2cTOkhgO9FMdzwLRsXtTRAEYBPwQWlrBTLzCsrGIDHiio8AlgUsU22GMAnAo8VdBm91PgnTRQ2TUFlKwELkhwz3skgAuBdwvYb0ZRBROBzZHCnwbGJLrXPRbAIcS/Hj4lTF+iBB8AvB0peDZlhucQAeE1cVukLd8C/LVL4NZIgdfWcI8dAeC6SJv+2hM0njDcPMyu6d46BsBvIuy6mbDw3FDI/Aghj9J9rAkYAfwUWASsz/4WAT8BdpsXAT3AXyPs+8dGCk8AtjqdVwKfSX73bQ5gHPBqjp1eAcYN0u9Q4D3HxluB4wdTOifCu0P+U5owcvKcM9BJg42kiyP6ztm10wGEIZqHJ2qzQhuD8FiLxVUNZPzN6beegV90hGUZD0N2hWAggMUFHPRiAxmTI/pePrCD9/J6rjYLtDmA/gIOWpcj53mnb68k9RAW6yY7vOY417sYHORcu9/pezowfPsCXx42AaOqZL0ngwoecZmcA4FPnP6ThinsZ+RhkZk1HKp1g7B5eJLCqD9OId7uSEkHKYR5oRBZs1rSuwp7UP+RtFDSy2a2tUkKDynE+8Xg940umNlaYLFCeFojTBRwr+PFWUXYpwBhX+o7wDxgTYFf8K5YDcwFziMEVpbhMoLwCe3hFSA3oAa4yZFxj4AFTqPvljNr8wAOBmYBH0YYpCg+BG4ARpfgNY58Jw06UR1EzkUOx2cEvOE0Gl/OvOUBjCT8utZFmbo5rCX8CAqFIgN7A1cBLxK+7PqBF7L/RYWiAV9xuC0X/q/z0HJmLgdgKvBmeXuXxn+Bc2u+18McTqsEbHQa7VMT2eHAr4Btzdu6NLYBdxA5Aiq455EOn48NyPtWl5klX7kGDpf0F0lfS60rEoslnW9mq1Ircu3fagcBX5D0pKQvp9RTAiskfcvMlqdU0tYOAr6kMD85omDXrQq/8mckvawwz+lTSAORwnzoCEnHSjpR0pkKeUp7FdTTJ2mymb1ZsF80PPvLeygnJHY44cVcBCuAnwFFHSrgCOBqwt5/ESwnYVCMa3+3QRpSI4AlBYzURwgOLDW53EX3cOAK4IMC+heR6MPBtb/bIA2pOwsY5z7goAQcDiIEDcbi9qo5ZDzy7e82qJ7QVOI+pTcBl1WtfxA+0/AXLck4T0mgP9/+boNqyYwkbhLaD5xVpW6H19nE7fO8QcEVhwjd+fZ3G1RLxlschDByanPOAG5nETeSbqhYb7793QbVETmYuLW15I+1HI4xW/9rqfCd6NrfbVAdkVkRN39fVfqa4Bnz4fDLCvW13kGET1tvUbaPBF9rJbiOBlY5XD+gbF7P7vpyUVfq/BRJ3qr4tWa2pg4yeTCz1ZJ+4TQbI6mele+aRtA8R80KKpiEVgXCiPdWHB6pSFdrRxAhhuCbTrO7YhJq60LG5S6n2TnZvaVF6hEEnOyo2EKJtbXUAMZm3PJwUgV6WjuC5MfcLTazvhp4FIKZvS9pidMsLyKnEtThoOOc68/UwKEsPG7evTWNOhx0rHP9pRo4lMXLzvVjUhOow0FHOteX1sChLDxuyUvi1OEgL2z4gxo4lIXHLXmhjjoc5GUur3eutxJe+bCOcFAXTaAOB3kjpJ3rmnojpLLapI1Qh4O8zIi2m6QOwOHO9eRZH3U4aKVz/egaOJSF9xn9TmoCdTjI+1RterkkITxuy1ITqMNB/3aun1kDh7LwuHn31jTqcNDzzvWJROTS1A1grPxY8eTJ1XU46CVJeRtxPZIurYFHUfxA+aHCH0l6NTWJ5A7KckKfdppdRZtt2EkatAjFADxlZttSc6lrovqgc/1zkloWzTMIpslfZ3uoDiJ1Bo3EBGK0S9CIF+DSWUEj2Rby3U6zMZJ+WwMdD3fID3C5K9VxNLuhjhGU6RlNCPrzMK0qnSU4To/gt4ZODFzMyMQEL34CnF2l3khuZxMX+ltZ0GKmN9/+boNqyYwkLmmrnxqdRHzw/HIqTqp27e82qBjAucSln3xCDY87wmMtNv3knAT68+3vNkgA4PYIg2zH/ZSoBhLBYTTwuwI8bq2aQ8Yj3/5ugzSk9iakFcZiFXAl1aVA/ohi5WVeqEJ3Az759ncbJAIwhvBML4K3CInAY0voGwfMIL5o+3YsAw5LYYOMVy5anYb/RYXF1DJp+Eu0Iw1/maT3tHMa/jiFvaYTJX1DYeGzaKju+5JOa2UafrsUsnhC7bdx96akc1tdyKLlQSNmtkLS6QqFKdoFL0qalNo5MehROCWrIaihmFJWE2eypFuUX+czNZB0p6QzzOzD5Mr8hOSN7ViObAp+DbsUWE6CeY5zr245sh75oUO1ng1kZo9LGi9plmqImpG0VtL1kiaY2VM16BsIN2qoR37UTfIA8V1hZhvN7EaFfaLrJaUoC7Yqk/15M7u5RYceerZd2SM/6mZCRWQKw8zWmNnNCgH450n6g0I137L4SNIjkr4t6cjMMa3Mi/Vsu3SYQimvPJxREZnSyPZeeiX1EtIOv6qQPHWcwuf5UdpRllkK86HVCk+HZQrRNwslvVLHNnUBeFFDS7uFzVsEIgubCxiGXwGkZZtonQrC2mIe1gHDe7LHx0JH3vQ6SA8xeD/6Z/+f+U5cjZq4YyS7cAFMirD3ZQM7xBzw9GQL76mjAPzdsfXOBzxlnWKOSGvZMQGdAsockZZ1PB7/kMF3gUNacF8dAZo5ZDAT8KcI7z5G95jOwiAc0/l4hH3n5QkZT9wZ3kn25zsZxMVhbKbR6BkgaHaEIACvZFcXGYg/KvqWGGH7E79vfxvdx11DEB5rsRFMbwH7xQo+hbhHHcDTJKzMvqcCOIS4o6EhnJ9ebJ4JzIwUDuHL5KJE97rHAbgEeL+A/a4uo8QoVpkdwmgasisOhANsvUnorphD2dcEYSG1t6BCCIe4TgcOrNgGbQfCEQNX4h9cOxgexckzcj0H7CtprqSpJfhv1o5jZF5T2Bzsk7TezDaWkNcyEAI89pc0VmEPaoJ2HHtTJuq0V9L3zOzjvEZRQ4uwSXaPpCtLEOlidzwo6YqYOq1RcXFZIvCPJc2UVE9mWWfiU0kzJF0eW0S38MsJOFXSwwoBHV3E421Jl5pZw+OjB0PhyFIze0HS8ZJuVHjHdJGPLQrBkBOKOkcqMYIGAjhBwVEXqA3CiNsM2yTNl3SDmb1eVkglyzSEBb4Zki6WFLdc0bnYIGmepNnNOGY7Kl1HI+wCXqjgqNNVQ8nINkG/pGcVHDPfzCor85ky92eYQk7ORIUIyu3xa6MU5hOVnmRVAzYqOKJfoU7cMoWYwsWS/pmqbsL/AF3REth6ktSZAAAAAElFTkSuQmCC",className:"net-logos"}),Object(A.jsx)("img",{alt:"Github link",src:"data:image/png;base64,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",className:"net-logos"})]})})]})]}),Object(A.jsx)(f.a,{params:{particles:{number:{value:n},size:{value:3},stroke:{color:"rgb(239, 160, 11)",width:6},lineLinked:{color:"rgba(239, 160, 11,1)"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}},polygon:{draw:{stroke:{color:"rgba(0,0,0,1)",width:5}}}},className:"particles-js ".concat(t?"":"navUnToggle")})]})},w=(a(368),a.p+"static/media/personal-photo2.6057d66f.jpg"),y={name:"Santiago Herrera Vel\xe1squez",titles:["Systems engineer student","Developer in development"],description:"I'm %%%, a young engineer system student, passionate about learning and good challenges. Actually i'm a fullstack developer and mobile developer in learning progress, i really enjoy to use and learn the newest technologies, languajes and frameworks, to be agree with the las tendences of the market.",birthdate:"2001/10/23","city-from":"Bogot\xe1 DC","country-from":"Colombia","city-live":"Fusagasug\xe1","country-live":"Colombia",mails:["santiherreravelas@gmail.com","sherrerav@correo.udistrital.edu.co"],interests:["Web development","Mobile development","Front-end development","Back-end development","Data science","AI"],"hobby-interests":["Music edition","Guitar and bass playing","Basketball"]},S=function(){var e=function(){return Object(A.jsx)("strong",{children:y.name})},t=y.description.split("%%%");return Object(A.jsx)("div",{className:"personal-info",id:"about-me",children:Object(A.jsxs)(j.a,{xs:12,md:10,className:"info-container",children:[Object(A.jsx)("div",{className:"info-container__title",children:Object(A.jsx)("div",{children:"About me"})}),Object(A.jsxs)(u.a,{className:"info-container__info",children:[Object(A.jsx)(j.a,{lg:{span:4,offset:4},className:"info-container__info--photo",children:Object(A.jsx)(p.a,{fluid:!0,rounded:!0,src:w,alt:"personal"})}),Object(A.jsxs)(u.a,{className:"info-container__info--item",children:[Object(A.jsx)(h.a,{children:Object(A.jsxs)(j.a,{lg:{span:10,offset:1},className:"info-container--description",children:[t[0],e(),t[1]]})}),Object(A.jsxs)(h.a,{children:[Object(A.jsxs)(j.a,{lg:{span:5,offset:1},className:"info-container__info--item",children:[Object(A.jsx)("strong",{children:"Birthdate: "})," ",y.birthdate]}),Object(A.jsxs)(j.a,{lg:{span:5,offset:0},className:"info-container__info--item",children:[Object(A.jsx)("strong",{children:"Age:"})," 19"]})]}),Object(A.jsxs)(h.a,{children:[Object(A.jsxs)(j.a,{lg:{span:5,offset:1},className:"info-container__info--item",children:[Object(A.jsx)("strong",{children:"Birth-city:"})," ","".concat(y["city-from"],", ").concat(y["country-from"])]}),Object(A.jsxs)(j.a,{lg:{span:5,offset:0},className:"info-container__info--item",children:[Object(A.jsx)("strong",{children:"Actual-city:"})," ","".concat(y["city-live"],", ").concat(y["country-live"])]})]}),Object(A.jsxs)(h.a,{children:[Object(A.jsxs)(j.a,{lg:{span:5,offset:1},className:"info-container__info--item",children:[Object(A.jsx)("strong",{children:"Mails:"})," ",y.mails.map((function(e,t){return"".concat(e).concat(t+1>=y.mails.length?"":","," ")}))]}),Object(A.jsxs)(j.a,{lg:{span:5,offset:0},className:"info-container__info--item",children:[Object(A.jsx)("strong",{children:"Degree:"}),"  ",y.titles.map((function(e,t){return"".concat(e).concat(t+1>=y.titles.length?"":","," ")}))]})]}),Object(A.jsxs)(h.a,{children:[Object(A.jsxs)(j.a,{lg:{span:5,offset:1},className:"info-container__info--item",children:[Object(A.jsx)("strong",{children:"Interests:"})," ",y.interests.map((function(e,t){return"".concat(e).concat(t+1>=y.interests.length?"":","," ")}))]}),Object(A.jsxs)(j.a,{lg:{span:5,offset:0},className:"info-container__info--item",children:[Object(A.jsx)("strong",{children:"Hobby interests:"})," ",y["hobby-interests"].map((function(e,t){return"".concat(e).concat(t+1>=y["hobby-interests"].length?"":","," ")}))]})]})]})]})]})})},x=function(e){var t=e.showNav;return Object(A.jsxs)("div",{children:[Object(A.jsx)(k,{showNav:t}),Object(A.jsx)(S,{})]})},B=(a(369),a.p+"static/media/angular_icon.6207d57c.svg"),T=a.p+"static/media/bootstrap_icon.91aad92a.svg",P=a.p+"static/media/dart_icon.199a4596.svg",N=a.p+"static/media/django_icon.d578526d.svg",J=a.p+"static/media/flask_icon.b2285cbe.svg",z=a.p+"static/media/flutter_icon.05db7a33.svg",C=a.p+"static/media/git_icon.f9bc1ab7.svg",F=a.p+"static/media/github_icon.4cd3a2bc.svg",L=a.p+"static/media/html_icon.904b942f.svg",E=a.p+"static/media/java.e5cd5457.svg",M=a.p+"static/media/javafx_icon.e6692a3a.svg",U=a.p+"static/media/js_icon.b116b4e2.svg",G=a.p+"static/media/mongodb_icon.3beac5ba.svg",V=a.p+"static/media/mysql_icon.cf79d456.svg",Z=a.p+"static/media/node_icon.8c7a5653.svg",D=a.p+"static/media/postgressql.6d3129da.svg",I=a.p+"static/media/python_icon.39a98117.svg",q=a.p+"static/media/react_icon.0b8a7b5a.svg",Y=a.p+"static/media/tensorflow_icon.d978d6b0.svg",K=a.p+"static/media/ts_icon.834dc8e1.svg",Q=a.p+"static/media/ruby_icon.7b4519aa.svg",H=a.p+"static/media/docker_icon.c49ffb5c.svg",R=a.p+"static/media/cpp_icon.306831ef.svg",W=a.p+"static/media/css_icon.e372ed0e.svg",X=a.p+"static/media/pytorch-icon.c14baedc.svg",_=a.p+"static/media/pip_icon.5b0fbb74.svg",$=a.p+"static/media/vue_icon.794e612a.svg",ee=[{name:"HTML5",percent:80,svg:L,inProgress:!0,category:"language","sub-category":"front-end"},{name:"CSS3",percent:65,svg:W,inProgress:!0,category:"language","sub-category":"front-end"},{name:"JavaScript",percent:85,svg:U,inProgress:!0,category:"language","sub-category":"front-end"},{name:"TypeScript",percent:65,svg:K,inProgress:!1,category:"language","sub-category":"front-end"},{name:"Python",percent:80,svg:I,inProgress:!0,category:"language","sub-category":"back-end data ia"},{name:"Java",percent:85,svg:E,inProgress:!1,category:"language","sub-category":"back-end desktop"},{name:"Dart",percent:50,svg:P,inProgress:!0,category:"language","sub-category":"mobile other"},{name:"C++",percent:30,svg:R,inProgress:!0,category:"language","sub-category":"desktop other"},{name:"Ruby",percent:45,svg:Q,inProgress:!0,category:"language","sub-category":"back-end other"},{name:"Flutter",percent:60,svg:z,inProgress:!0,category:"framework","sub-category":"mobile"},{name:"React.js",percent:50,svg:q,inProgress:!0,category:"framework","sub-category":"front-end"},{name:"Angular",percent:25,svg:B,inProgress:!1,category:"framework","sub-category":"front-end"},{name:"Bootstrap",percent:60,svg:T,inProgress:!0,category:"framework","sub-category":"front-end"},{name:"Flask",percent:85,svg:J,inProgress:!0,category:"framework","sub-category":"back-end"},{name:"Django",percent:0,svg:N,inProgress:!1,category:"framework","sub-category":"back-end"},{name:"Pytorch",percent:10,svg:X,inProgress:!1,category:"framework","sub-category":"data ia"},{name:"TensorFlow",percent:15,svg:Y,inProgress:!0,category:"framework","sub-category":"data ia"},{name:"Scrum",percent:40,svg:"",inProgress:!0,category:"...","sub-category":"agile"},{name:"XP",percent:15,svg:"",inProgress:!1,category:"...","sub-category":"agile"},{name:"Git",percent:85,svg:C,inProgress:!1,category:"tech","sub-category":"other"},{name:"Github",percent:70,svg:F,inProgress:!0,category:"tech","sub-category":"other"},{name:"Docker",percent:20,svg:H,inProgress:!0,category:"tech","sub-category":"other"},{name:"JavaFX",percent:50,svg:M,inProgress:!1,category:"tech","sub-category":"front-end"},{name:"PostgreSQL",percent:50,svg:D,inProgress:!1,category:"tech","sub-category":"db"},{name:"MySQL",percent:35,svg:V,inProgress:!1,category:"tech","sub-category":"db"},{name:"Node.js/NPM",percent:60,svg:Z,inProgress:!0,category:"tech","sub-category":"other"},{name:"pip",percent:60,svg:_,inProgress:!0,category:"tech","sub-category":"other"},{name:"MongoDB",percent:70,svg:G,inProgress:!0,category:"tech","sub-category":"db"},{name:"Ruby on rails",percent:40,svg:a.p+"static/media/rails_icon.e4b697d6.svg",inProgress:!0,category:"framework","sub-category":"back-end"},{name:"Cucumber",percent:15,svg:a.p+"static/media/cucumber_icon.aeb35549.svg",inProgress:!1,category:"tech","sub-category":"back-end"},{name:"Vue.js",percent:0,svg:$,inProgress:!1,category:"framework","sub-category":"front-end"},{name:"Selenium",percent:40,svg:a.p+"static/media/selenium_icon.6c927b67.svg",inProgress:!0,category:"tech","sub-category":"test"}],te=a(108),ae=a(396),ce=a(395),se=function(){var e=Object(c.useState)("language"),t=Object(i.a)(e,2),a=t[0],s=t[1],n=function(e){var t=ee.filter((function(t){return t.category===e}));return Object(A.jsx)(h.a,{className:"skills scrollbar",children:t.map((function(e){var t=e.svg;return Object(A.jsxs)(j.a,{xs:6,md:4,lg:3,className:"skill",children:[Object(A.jsx)("h4",{className:"skill--title",children:e.name}),Object(A.jsx)(te.a,{svg:t,width:80,colors:["#7EADCC","#154E6B","#7EADCC","#154E6B","#7EADCC","#154E6B","#7EADCC","#154E6B"],className:"skill--icon"}),Object(A.jsx)(ae.a,{now:e.percent,animated:e.inProgress,className:"skill--progress"}),Object(A.jsxs)("p",{className:"skill--text",children:["".concat(e.percent,"%")," ",e.inProgress?"- in progress":""]})]})}))})};return Object(A.jsx)("div",{id:"skills",children:Object(A.jsxs)(u.a,{className:"skills-container",children:[Object(A.jsxs)(ce.a,{fill:!0,variant:"tabs",children:[Object(A.jsx)(ce.a.Item,{onClick:function(){s("language")},children:Object(A.jsx)(ce.a.Link,{className:"nav-item",children:"Languages"})}),Object(A.jsx)(ce.a.Item,{onClick:function(){s("framework")},children:Object(A.jsx)(ce.a.Link,{className:"nav-item",children:"Frameworks"})}),Object(A.jsx)(ce.a.Item,{onClick:function(){s("tech")},children:Object(A.jsx)(ce.a.Link,{className:"nav-item",children:"Technologies"})})]}),"language"===a?n("language"):"","framework"===a?n("framework"):"","tech"===a?n("tech"):""]})})};var ne=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),a=t[0];return t[1],Object(A.jsxs)(o.a,{children:[Object(A.jsx)(b,{show:a}),Object(A.jsx)("div",{className:"content ".concat(a?"":"navUnToggle"," "),children:Object(A.jsxs)(g.d,{children:[Object(A.jsx)(g.b,{path:"/home",component:function(){return Object(A.jsx)(x,{showNav:a})}}),Object(A.jsx)(g.b,{path:"/skills",component:function(){return Object(A.jsx)(se,{})}}),Object(A.jsx)(g.a,{to:"/home"})]})})]})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,397)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(ne,{})}),document.getElementById("root")),re()}},[[386,1,2]]]);
//# sourceMappingURL=main.0a924272.chunk.js.map