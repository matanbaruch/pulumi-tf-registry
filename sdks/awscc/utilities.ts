// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as resproto from "@pulumi/pulumi/proto/resource_pb";
import * as mutex from "async-mutex";

import * as runtime from "@pulumi/pulumi/runtime";
import * as pulumi from "@pulumi/pulumi";

export function getEnv(...vars: string[]): string | undefined {
    for (const v of vars) {
        const value = process.env[v];
        if (value) {
            return value;
        }
    }
    return undefined;
}

export function getEnvBoolean(...vars: string[]): boolean | undefined {
    const s = getEnv(...vars);
    if (s !== undefined) {
        // NOTE: these values are taken from https://golang.org/src/strconv/atob.go?s=351:391#L1, which is what
        // Terraform uses internally when parsing boolean values.
        if (["1", "t", "T", "true", "TRUE", "True"].find(v => v === s) !== undefined) {
            return true;
        }
        if (["0", "f", "F", "false", "FALSE", "False"].find(v => v === s) !== undefined) {
            return false;
        }
    }
    return undefined;
}

export function getEnvNumber(...vars: string[]): number | undefined {
    const s = getEnv(...vars);
    if (s !== undefined) {
        const f = parseFloat(s);
        if (!isNaN(f)) {
            return f;
        }
    }
    return undefined;
}

export function getVersion(): string {
    let version = require('./package.json').version;
    // Node allows for the version to be prefixed by a "v", while semver doesn't.
    // If there is a v, strip it off.
    if (version.indexOf('v') === 0) {
        version = version.slice(1);
    }
    return version;
}

/** @internal */
export function resourceOptsDefaults(): any {
    return { version: getVersion() };
}

/** @internal */
export function lazyLoad(exports: any, props: string[], loadModule: any) {
    for (let property of props) {
        Object.defineProperty(exports, property, {
            enumerable: true,
            get: function() {
                return loadModule()[property];
            },
        });
    }
}

export async function callAsync<T>(
    tok: string,
    props: pulumi.Inputs,
    res?: pulumi.Resource,
    opts?: {property?: string},
): Promise<T> {
    const o: any = runtime.call<T>(tok, props, res);
    const value = await o.promise(true /*withUnknowns*/);
    const isKnown = await o.isKnown;
    const isSecret = await o.isSecret;
    const problem: string|undefined =
        !isKnown ? "an unknown value"
        : isSecret ? "a secret value"
        : undefined;
    // Ingoring o.resources silently. They are typically non-empty, r.f() calls include r as a dependency.
    if (problem) {
        throw new Error(`Plain resource method "${tok}" incorrectly returned ${problem}. ` +
            "This is an error in the provider, please report this to the provider developer.");
    }
    // Extract a single property if requested.
    if (opts && opts.property) {
        return value[opts.property];
    }
    return value;
}

const _packageLock = new mutex.Mutex();
var _packageRef : undefined | string = undefined;
export async function getPackage() : Promise<string | undefined> {
	if (_packageRef === undefined) {
		await _packageLock.acquire();
		if (_packageRef === undefined) {
			const monitor = runtime.getMonitor();
			const params = new resproto.Parameterization();
			params.setName("awscc");
			params.setVersion("1.12.0");
			params.setValue(Uint8Array.from(atob("eyJyZW1vdGUiOnsidXJsIjoicmVnaXN0cnkudGVycmFmb3JtLmlvL2hhc2hpY29ycC9hd3NjYyIsInZlcnNpb24iOiIxLjEyLjAifX0="), c => c.charCodeAt(0)));

			const req = new resproto.RegisterPackageRequest();
			req.setName("terraform-provider");
			req.setVersion("0.1.0");
			req.setDownloadUrl("");
			req.setParameterization(params);
			const resp : any = await new Promise((resolve, reject) => {
				monitor!.registerPackage(req, (err: any, resp: any) => {
					if (err) {
						reject(err);
					} else {
						resolve(resp);
					}
				});
			});
			_packageRef = resp.getRef();
		}
		_packageLock.release();
	}
	return _packageRef as string;
}
