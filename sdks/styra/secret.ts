// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
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
    public static readonly __pulumiType = 'styra:index/secret:Secret';

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

    public readonly description!: pulumi.Output<string>;
    /**
     * if set to '*' then the request fill fail if the secret already exists
     */
    public readonly ifNoneMatch!: pulumi.Output<string | undefined>;
    public /*out*/ readonly metadata!: pulumi.Output<outputs.SecretMetadata>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly requestId!: pulumi.Output<string>;
    public readonly secret!: pulumi.Output<string>;
    /**
     * secret ID
     */
    public readonly secretId!: pulumi.Output<string>;

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
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ifNoneMatch"] = state ? state.ifNoneMatch : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["requestId"] = state ? state.requestId : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["secretId"] = state ? state.secretId : undefined;
        } else {
            const args = argsOrState as SecretArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.secret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secret'");
            }
            if ((!args || args.secretId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secretId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ifNoneMatch"] = args ? args.ifNoneMatch : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["secret"] = args?.secret ? pulumi.secret(args.secret) : undefined;
            resourceInputs["secretId"] = args ? args.secretId : undefined;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["requestId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["secret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Secret.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Secret resources.
 */
export interface SecretState {
    description?: pulumi.Input<string>;
    /**
     * if set to '*' then the request fill fail if the secret already exists
     */
    ifNoneMatch?: pulumi.Input<string>;
    metadata?: pulumi.Input<inputs.SecretMetadata>;
    name?: pulumi.Input<string>;
    requestId?: pulumi.Input<string>;
    secret?: pulumi.Input<string>;
    /**
     * secret ID
     */
    secretId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Secret resource.
 */
export interface SecretArgs {
    description: pulumi.Input<string>;
    /**
     * if set to '*' then the request fill fail if the secret already exists
     */
    ifNoneMatch?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    secret: pulumi.Input<string>;
    /**
     * secret ID
     */
    secretId: pulumi.Input<string>;
}
