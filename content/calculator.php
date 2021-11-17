<script src="js/calc.js"></script>
<section>
<h1>Valuuta kalkulator var 1</h1>
<form name="var1" onclick="return validateForm()" method="post">
    <label for="kogus">Sisesta kogus:</label>
    <input type="number" name="kogus" id="kogus"> euro
    <br>
    <fieldset>
        <legend>Vali valuuta:</legend>

        <input type="radio" name="valuuta1" id="dollar" value="dollar" onchange="radioChange(event)">
        <label for="dollar">dollar $</label>
        <br>
        <input type="radio" name="valuuta1" id="rub" value="rub" onchange="radioChange(event)">
        <label for="rub">rub ₽</label>
        <br>
        <input type="radio" name="valuuta1" id="hryvnia" value="hryvnia" onchange="radioChange(event)">
        <label for="hryvnia">hryvnia ₴</label>
        <br>
        <input type="radio" name="valuuta1" id="zloty" value="zloty" onchange="radioChange(event)">
        <label for="zloty">zloty Zł</label>
        <br>
    </fieldset>
    <div id="vastus"> Siia tuleb vastus...</div>
</form>

<img src="piltid/pust.jpg" alt="pilt" id="pilt">
</section>
<section>
<h1>Valuuta kalkulator var 2</h1>
<form name="var2">
    <label for="kogus2">Sisesta kogus:</label>
    <input type="number" name="kogus2" id="kogus2"> euro

    <select name="valuuta2" onchange="selectOptionChange(event)">
        <option value=""></option>
        <option value="dollar">dollar</option>
        <option value="rub">rub</option>
        <option value="hryvnia">hryvnia</option>
        <option value="zloty">zloty</option>
    </select>
    <div id="vastus2"> Siia tuleb vastus...</div>
</form>
</section>

<section>
<h1>Valuuta kalkulator var 3</h1>
<from>
    <label for="kogus3">Sisesta kogus:</label>
    <input type="number" name="kogus3" id="kogus3"> euro
    <br>
    <label for="valuutanimi">Sisesta valuuta(dollar,rouble,hryvnia,zloty)</label>
    <input type="text" name="valuutanimi" id="valuutanimi" placeholder="Valuuta nimetus">
    <input type="button" onclick="inputCurrencyText()" value="OK">
    <div id="vastus3"> Siia tuleb vastus...</div>
</from>

<h1>Pikkus kalkulator var 4</h1>
<form name="rav1">
    <label for="kolvo">Sisesta pikkus:</label>
    <input type="nomer" name="kolvo" id="kolvo"> km
    <br>
    <fieldset>
        <legend>Vali pikk:</legend>

        <input type="radio" name="pikk1" id="mm" value="mm" onchange="Change(event)">
        <label for="mm">mm </label>
        <br>
        <input type="radio" name="pikk1" id="sm" value="sm" onchange="Change(event)">
        <label for="sm">sm  </label>
        <br>
        <input type="radio" name="pikk1" id="dm" value="dm" onchange="Change(event)">
        <label for="dm">dm </label>
        <br>
        <input type="radio" name="pikk1" id="m" value="m" onchange="Change(event)">
        <label for="m">m </label>
        <br>
    </fieldset>
    <div id="vastus4"> Siia tuleb vastus...</div>
</form>

<a href="https://github.com/MaxTsobirev/kalkulator">GitHubLink</a>

<script src="kalk.js"></script>
</section>
