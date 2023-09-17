        //作品情報をidに基づいてモーダルウィンドウに表示するスクリプト
        const items = [{ /*ここに作品のデータを記入する、別のスクリプトかcssを用いてmodalに変数の値を代入させる(未完成、追加調査の必要あり)*/
            title: "タイトル1",
            tag: movie,
            img: "debug-images/doggo.jpg",
            text: "テキストテキストテキストテキスト"
        }, {
            title: "タイトル2",
            tag: photo,
            img: "debug-images/mountain.jpg",
            text: "テキストテキストテキストテキスト"
        }, {
            title: "タイトル3",
            tag: web,
            img: "debug-images/seal.jpg",
            text: "テキストテキストテキストテキスト"
        }];
        // 画像をクリックした際に、画像のidタグだけを取得
        function getClickedImageId() {
            // イベントオブジェクトから画像要素を取得
            const event = event;
            //イベントオブジェクトが画像要素でclass"work-thumb"だった場合、imgに代入する
            if (event.target.classList.contains("work-thumb")) {
                const img = event.target;
                // 画像のid属性を取得
                const id = img.id;
                // 画像のidタグだけを返す
                return id;
            } else {  //画像要素でない場合、処理中断
                return 0;
            }

        }
        // 作品の画像要素に含まれるidと配列の番号を一致させ、id(配列番号)を取得することで、modalに表示するデータを取得する
        function showModalWindow() {
            // クリックされたサムネイル画像のid属性を取得
            const id = getClickedImageId();

            // モーダルウィンドウの表示内容を更新
            document.querySelector("#modal-window img").src = items[id].img;
            document.querySelector("#modal-window .works-detail-text h2").textContent = items[id].title;
            document.querySelector("#modal-window .works-detail-text p").textContent = items[id].text;
            document.querySelector("#modal-window .works-detail-text p").textContent = items[id].tag;

            // モーダルウィンドウを表示
            document.querySelector("#modal-window").style.display = "block";
        }