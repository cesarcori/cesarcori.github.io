---
title: UUID generate locally
description: UUID generate locally
pubDate: 2024-06-27
---

The platform uuidgenerator.net gives us several random uuids. But what if for some reason
the network failed? I could research some alternatives that help us.

1. Python (comes by default)
2. uuidgen (Linux command required install)

### Option 1 - Python:

In Python, we have to import the uuid library and copy the result

	import uuid
	uuid.uuid4()
	// Output: UUID('ad894009-bb20-48e2-a8ce-1a26886c6251')

### Option 2 - uuidgen:

We need to install uuid-runtime

	sudo apt install uuid-runtime

After, executing the command uuidgen

	uuidgen
	// Output: ad894009-bb20-48e2-a8ce-1a26886c6251

We can have the advantage from shell commands using the loop “for” to generate several uuids

	for i in {1..20}; do uuigen; done

I hope this helps you.
