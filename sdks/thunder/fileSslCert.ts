// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FileSslCert extends pulumi.CustomResource {
    /**
     * Get an existing FileSslCert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FileSslCertState, opts?: pulumi.CustomResourceOptions): FileSslCert {
        return new FileSslCert(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/fileSslCert:FileSslCert';

    /**
     * Returns true if the given object is an instance of FileSslCert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FileSslCert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FileSslCert.__pulumiType;
    }

    /**
     * Certificate format
     */
    public readonly certificateType!: pulumi.Output<string | undefined>;
    /**
     * Remote site (IP or domain name)
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Local file name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Overwrite existing file
     */
    public readonly overwrite!: pulumi.Output<number | undefined>;
    /**
     * Password for the remote site
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Remote path
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * Password for pfx format
     */
    public readonly pfxPassword!: pulumi.Output<string | undefined>;
    /**
     * Transfer protocol
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Mark key as non-exportable (for pfx format)
     */
    public readonly secured!: pulumi.Output<number | undefined>;
    /**
     * Use management port as source port
     */
    public readonly useMgmtPort!: pulumi.Output<number | undefined>;
    /**
     * Username for the remote site
     */
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a FileSslCert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileSslCertArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FileSslCertArgs | FileSslCertState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FileSslCertState | undefined;
            resourceInputs["certificateType"] = state ? state.certificateType : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["overwrite"] = state ? state.overwrite : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["pfxPassword"] = state ? state.pfxPassword : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["secured"] = state ? state.secured : undefined;
            resourceInputs["useMgmtPort"] = state ? state.useMgmtPort : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as FileSslCertArgs | undefined;
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["certificateType"] = args ? args.certificateType : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["overwrite"] = args ? args.overwrite : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["pfxPassword"] = args ? args.pfxPassword : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["secured"] = args ? args.secured : undefined;
            resourceInputs["useMgmtPort"] = args ? args.useMgmtPort : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FileSslCert.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FileSslCert resources.
 */
export interface FileSslCertState {
    /**
     * Certificate format
     */
    certificateType?: pulumi.Input<string>;
    /**
     * Remote site (IP or domain name)
     */
    host?: pulumi.Input<string>;
    /**
     * Local file name
     */
    name?: pulumi.Input<string>;
    /**
     * Overwrite existing file
     */
    overwrite?: pulumi.Input<number>;
    /**
     * Password for the remote site
     */
    password?: pulumi.Input<string>;
    /**
     * Remote path
     */
    path?: pulumi.Input<string>;
    /**
     * Password for pfx format
     */
    pfxPassword?: pulumi.Input<string>;
    /**
     * Transfer protocol
     */
    protocol?: pulumi.Input<string>;
    /**
     * Mark key as non-exportable (for pfx format)
     */
    secured?: pulumi.Input<number>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
    /**
     * Username for the remote site
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FileSslCert resource.
 */
export interface FileSslCertArgs {
    /**
     * Certificate format
     */
    certificateType?: pulumi.Input<string>;
    /**
     * Remote site (IP or domain name)
     */
    host: pulumi.Input<string>;
    /**
     * Local file name
     */
    name?: pulumi.Input<string>;
    /**
     * Overwrite existing file
     */
    overwrite?: pulumi.Input<number>;
    /**
     * Password for the remote site
     */
    password?: pulumi.Input<string>;
    /**
     * Remote path
     */
    path: pulumi.Input<string>;
    /**
     * Password for pfx format
     */
    pfxPassword?: pulumi.Input<string>;
    /**
     * Transfer protocol
     */
    protocol: pulumi.Input<string>;
    /**
     * Mark key as non-exportable (for pfx format)
     */
    secured?: pulumi.Input<number>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
    /**
     * Username for the remote site
     */
    username?: pulumi.Input<string>;
}
