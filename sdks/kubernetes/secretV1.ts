// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecretV1 extends pulumi.CustomResource {
    /**
     * Get an existing SecretV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretV1State, opts?: pulumi.CustomResourceOptions): SecretV1 {
        return new SecretV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:index/secretV1:SecretV1';

    /**
     * Returns true if the given object is an instance of SecretV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecretV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecretV1.__pulumiType;
    }

    /**
     * A map of the secret data in base64 encoding. Use this for binary data.
     */
    public readonly binaryData!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A map of the secret data.
     */
    public readonly data!: pulumi.Output<{[key: string]: string}>;
    /**
     * Ensures that data stored in the Secret cannot be updated (only object metadata can be modified).
     */
    public readonly immutable!: pulumi.Output<boolean | undefined>;
    /**
     * Standard secret's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata!: pulumi.Output<outputs.SecretV1Metadata>;
    public readonly timeouts!: pulumi.Output<outputs.SecretV1Timeouts | undefined>;
    /**
     * Type of secret
     */
    public readonly type!: pulumi.Output<string | undefined>;
    public readonly waitForServiceAccountToken!: pulumi.Output<boolean | undefined>;

    /**
     * Create a SecretV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecretV1Args | SecretV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecretV1State | undefined;
            resourceInputs["binaryData"] = state ? state.binaryData : undefined;
            resourceInputs["data"] = state ? state.data : undefined;
            resourceInputs["immutable"] = state ? state.immutable : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["waitForServiceAccountToken"] = state ? state.waitForServiceAccountToken : undefined;
        } else {
            const args = argsOrState as SecretV1Args | undefined;
            if ((!args || args.metadata === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metadata'");
            }
            resourceInputs["binaryData"] = args?.binaryData ? pulumi.secret(args.binaryData) : undefined;
            resourceInputs["data"] = args?.data ? pulumi.secret(args.data) : undefined;
            resourceInputs["immutable"] = args ? args.immutable : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["waitForServiceAccountToken"] = args ? args.waitForServiceAccountToken : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["binaryData", "data"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SecretV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecretV1 resources.
 */
export interface SecretV1State {
    /**
     * A map of the secret data in base64 encoding. Use this for binary data.
     */
    binaryData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A map of the secret data.
     */
    data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Ensures that data stored in the Secret cannot be updated (only object metadata can be modified).
     */
    immutable?: pulumi.Input<boolean>;
    /**
     * Standard secret's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.SecretV1Metadata>;
    timeouts?: pulumi.Input<inputs.SecretV1Timeouts>;
    /**
     * Type of secret
     */
    type?: pulumi.Input<string>;
    waitForServiceAccountToken?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a SecretV1 resource.
 */
export interface SecretV1Args {
    /**
     * A map of the secret data in base64 encoding. Use this for binary data.
     */
    binaryData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A map of the secret data.
     */
    data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Ensures that data stored in the Secret cannot be updated (only object metadata can be modified).
     */
    immutable?: pulumi.Input<boolean>;
    /**
     * Standard secret's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata: pulumi.Input<inputs.SecretV1Metadata>;
    timeouts?: pulumi.Input<inputs.SecretV1Timeouts>;
    /**
     * Type of secret
     */
    type?: pulumi.Input<string>;
    waitForServiceAccountToken?: pulumi.Input<boolean>;
}
