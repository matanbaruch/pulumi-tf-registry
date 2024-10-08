// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Secret extends pulumi.CustomResource {
    /**
     * Get an existing Secret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretState, opts?: pulumi.CustomResourceOptions): Secret {
        return new Secret(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gcore:index/secret:Secret';

    /**
     * Returns true if the given object is an instance of Secret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Secret {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Secret.__pulumiType;
    }

    public /*out*/ readonly algorithm!: pulumi.Output<string>;
    public /*out*/ readonly bitLength!: pulumi.Output<number>;
    /**
     * SSL certificate in PEM format
     */
    public readonly certificate!: pulumi.Output<string>;
    /**
     * SSL certificate chain of intermediates and root certificates in PEM format
     */
    public readonly certificateChain!: pulumi.Output<string>;
    public /*out*/ readonly contentTypes!: pulumi.Output<{[key: string]: string}>;
    /**
     * Datetime when the secret was created. The format is 2025-12-28T19:14:44.180394
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Datetime when the secret will expire. The format is 2025-12-28T19:14:44
     */
    public readonly expiration!: pulumi.Output<string>;
    public /*out*/ readonly mode!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    /**
     * SSL private key in PEM format
     */
    public readonly privateKey!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<number | undefined>;
    public readonly projectName!: pulumi.Output<string | undefined>;
    public readonly regionId!: pulumi.Output<number | undefined>;
    public readonly regionName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;

    /**
     * Create a Secret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecretArgs | SecretState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecretState | undefined;
            resourceInputs["algorithm"] = state ? state.algorithm : undefined;
            resourceInputs["bitLength"] = state ? state.bitLength : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["certificateChain"] = state ? state.certificateChain : undefined;
            resourceInputs["contentTypes"] = state ? state.contentTypes : undefined;
            resourceInputs["created"] = state ? state.created : undefined;
            resourceInputs["expiration"] = state ? state.expiration : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["regionId"] = state ? state.regionId : undefined;
            resourceInputs["regionName"] = state ? state.regionName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SecretArgs | undefined;
            if ((!args || args.certificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificate'");
            }
            if ((!args || args.certificateChain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateChain'");
            }
            if ((!args || args.privateKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateKey'");
            }
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["certificateChain"] = args ? args.certificateChain : undefined;
            resourceInputs["expiration"] = args ? args.expiration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateKey"] = args ? args.privateKey : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["regionId"] = args ? args.regionId : undefined;
            resourceInputs["regionName"] = args ? args.regionName : undefined;
            resourceInputs["algorithm"] = undefined /*out*/;
            resourceInputs["bitLength"] = undefined /*out*/;
            resourceInputs["contentTypes"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Secret.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Secret resources.
 */
export interface SecretState {
    algorithm?: pulumi.Input<string>;
    bitLength?: pulumi.Input<number>;
    /**
     * SSL certificate in PEM format
     */
    certificate?: pulumi.Input<string>;
    /**
     * SSL certificate chain of intermediates and root certificates in PEM format
     */
    certificateChain?: pulumi.Input<string>;
    contentTypes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Datetime when the secret was created. The format is 2025-12-28T19:14:44.180394
     */
    created?: pulumi.Input<string>;
    /**
     * Datetime when the secret will expire. The format is 2025-12-28T19:14:44
     */
    expiration?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * SSL private key in PEM format
     */
    privateKey?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Secret resource.
 */
export interface SecretArgs {
    /**
     * SSL certificate in PEM format
     */
    certificate: pulumi.Input<string>;
    /**
     * SSL certificate chain of intermediates and root certificates in PEM format
     */
    certificateChain: pulumi.Input<string>;
    /**
     * Datetime when the secret will expire. The format is 2025-12-28T19:14:44
     */
    expiration?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * SSL private key in PEM format
     */
    privateKey: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
}
