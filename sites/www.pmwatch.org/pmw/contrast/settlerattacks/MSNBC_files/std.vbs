Function VBSFlashVersion()
Dim i, x
On Error Resume Next
x = null
For i = 5 To 1 Step -1
	Set x = CreateObject("ShockwaveFlash.ShockwaveFlash." & i)
	MM_FlashControlInstalled = IsObject(x)
	If MM_FlashControlInstalled Then
		VBSFlashVersion = CStr(i)
		Exit For
	Else
		VBSFlashVersion = 0
	End If
Next
set x = nothing
End Function

Function VBSMediaPlayerVersion()
Dim i, x
On Error Resume Next
x = null
For i = 8 To 1 Step -1
	Set x = CreateObject("MediaPlayer.MediaPlayer." & i)
	MM_FlashControlInstalled = IsObject(x)
	If MM_FlashControlInstalled Then
		VBSMediaPlayerVersion = CStr(i)
		Exit For
	Else
		VBSMediaPlayerVersion = 0
	End If
Next
set x = nothing

End Function
