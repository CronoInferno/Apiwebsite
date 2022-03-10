        // addEventListener version
        const input = document.querySelector('input[type="search"]');

        (function() {
            var cors_api_host = 'cors-anywhere.herokuapp.com';
            var cors_api_url = 'https://' + cors_api_host + '/';
            var slice = [].slice;
            var origin = window.location.protocol + '//' + window.location.host;
            var open = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function() {
                var args = slice.call(arguments);
                var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
                if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
                    targetOrigin[1] !== cors_api_host) {
                    args[1] = cors_api_url + args[1];
                }
                return open.apply(this, args);
            };
        })();

        async function load() {
            let url = 'https://cors-anywhere.herokuapp.com/https://fruityvice.com/api/fruit/' + input.value;
            let obj = await (await fetch(url)).json();
            console.log(obj);
            var box1 = document.getElementById("box1")
            box1.innerHTML = "Family: " + obj.family
            var box2 = document.getElementById("box2")
            box2.innerHTML = "Calories: " + obj.nutritions.calories + "kcal"
            var box3 = document.getElementById("box3")
            box3.innerHTML = "Protein: " + obj.nutritions.protein + "g"
            var box4 = document.getElementById("box4")
            box4.innerHTML = "Carbs: " + obj.nutritions.carbohydrates + "g"
            var box5 = document.getElementById("box5")
            box5.innerHTML = "Fat: " + obj.nutritions.fat + "g"
            var box6 = document.getElementById("box6")
            box6.innerHTML = "Sugar: " + obj.nutritions.sugar + "g"
        }

        input.addEventListener('search', () => {
            console.log("The term searched for was " + input.value);
            load();

        })