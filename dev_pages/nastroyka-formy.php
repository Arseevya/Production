<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Настройка формы");
?><?
$APPLICATION->SetTitle("Выбрать отпуск");
$APPLICATION->IncludeComponent(
    "bitrix:ui.sidepanel.wrapper",
    "",
    array(
        "POPUP_COMPONENT_NAME" => "bit:vacation_add",
        "AJAX_MODE" => "Y",
        'CLOSE_AFTER_SAVE' => true
    ),
);
?><? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>