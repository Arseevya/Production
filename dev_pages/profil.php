<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Профиль");
?><? $APPLICATION->IncludeComponent(
    "bitrix:ui.sidepanel.wrapper",
    "",
    array(
        "POPUP_COMPONENT_NAME" => "bit:user_profile",
        'CLOSE_AFTER_SAVE' => true,
    ),
    $component
); ?><? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>