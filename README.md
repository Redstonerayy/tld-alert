# TLD Download Blocker

This extension blocks downloads from .zip and .mov domains.
It aims to prevent malicious downloads caused by accidental clicks.

## What is the danger?

The new .zip domains makes it easy to create misleading urls to downloads.

https: ̸ ̸github.com ̸Redstonerayy ̸tld-alert ̸releases ̸v127@url.zip

The above url seems to download a release from this repo in form of a zip file,
but it actually links to `url.zip`. It can be split in
protocol: "https:", userinfo: "github.com ̸Redstonerayy ̸tld-alert ̸releases ̸v127"
and the real url (`url.zip`) after the `@`.
A person might expect to download something else than what is actually downloaded
at this **potentially** malicious url.
Therefore blocking downloads from .zip domains can be a safety enhancing option.
(it shall be mentioned, that `url.zip` is no such malicous download domain)

## Permissions

It needs the downloads permission (to cancel downloads).

## Download from .zip and .mov domains

Just disable the extension for the specific download.

## Chrome Webstore

Link will be here when i finish registering it.

## Install from a local folder

1. Clone the repository with git or download all the files in the repository in any other way (Release Page, Download Button)
2. Open your browser, go to `chrome://extensions`, enable developer mode.
3. Click on "Load Unpacked" an chose the location of the previously cloned repository.
4. As this repository will get updated, you may need to sync your git repository or download the files and load and package the extension again
