// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KeymanagerSecretV1 extends pulumi.CustomResource {
    /**
     * Get an existing KeymanagerSecretV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeymanagerSecretV1State, opts?: pulumi.CustomResourceOptions): KeymanagerSecretV1 {
        return new KeymanagerSecretV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/keymanagerSecretV1:KeymanagerSecretV1';

    /**
     * Returns true if the given object is an instance of KeymanagerSecretV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeymanagerSecretV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeymanagerSecretV1.__pulumiType;
    }

    public readonly acl!: pulumi.Output<outputs.KeymanagerSecretV1Acl | undefined>;
    public readonly algorithm!: pulumi.Output<string>;
    public /*out*/ readonly allMetadata!: pulumi.Output<{[key: string]: string}>;
    public readonly bitLength!: pulumi.Output<number>;
    public /*out*/ readonly contentTypes!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    public /*out*/ readonly creatorId!: pulumi.Output<string>;
    public readonly expiration!: pulumi.Output<string | undefined>;
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly mode!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly payload!: pulumi.Output<string | undefined>;
    public readonly payloadContentEncoding!: pulumi.Output<string | undefined>;
    public readonly payloadContentType!: pulumi.Output<string | undefined>;
    public readonly region!: pulumi.Output<string>;
    public /*out*/ readonly secretRef!: pulumi.Output<string>;
    public readonly secretType!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.KeymanagerSecretV1Timeouts | undefined>;
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a KeymanagerSecretV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: KeymanagerSecretV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeymanagerSecretV1Args | KeymanagerSecretV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KeymanagerSecretV1State | undefined;
            resourceInputs["acl"] = state ? state.acl : undefined;
            resourceInputs["algorithm"] = state ? state.algorithm : undefined;
            resourceInputs["allMetadata"] = state ? state.allMetadata : undefined;
            resourceInputs["bitLength"] = state ? state.bitLength : undefined;
            resourceInputs["contentTypes"] = state ? state.contentTypes : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["creatorId"] = state ? state.creatorId : undefined;
            resourceInputs["expiration"] = state ? state.expiration : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["payload"] = state ? state.payload : undefined;
            resourceInputs["payloadContentEncoding"] = state ? state.payloadContentEncoding : undefined;
            resourceInputs["payloadContentType"] = state ? state.payloadContentType : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["secretRef"] = state ? state.secretRef : undefined;
            resourceInputs["secretType"] = state ? state.secretType : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as KeymanagerSecretV1Args | undefined;
            resourceInputs["acl"] = args ? args.acl : undefined;
            resourceInputs["algorithm"] = args ? args.algorithm : undefined;
            resourceInputs["bitLength"] = args ? args.bitLength : undefined;
            resourceInputs["expiration"] = args ? args.expiration : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["payload"] = args?.payload ? pulumi.secret(args.payload) : undefined;
            resourceInputs["payloadContentEncoding"] = args ? args.payloadContentEncoding : undefined;
            resourceInputs["payloadContentType"] = args ? args.payloadContentType : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["secretType"] = args ? args.secretType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["allMetadata"] = undefined /*out*/;
            resourceInputs["contentTypes"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["creatorId"] = undefined /*out*/;
            resourceInputs["secretRef"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["payload"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(KeymanagerSecretV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KeymanagerSecretV1 resources.
 */
export interface KeymanagerSecretV1State {
    acl?: pulumi.Input<inputs.KeymanagerSecretV1Acl>;
    algorithm?: pulumi.Input<string>;
    allMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    bitLength?: pulumi.Input<number>;
    contentTypes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    createdAt?: pulumi.Input<string>;
    creatorId?: pulumi.Input<string>;
    expiration?: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    mode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    payload?: pulumi.Input<string>;
    payloadContentEncoding?: pulumi.Input<string>;
    payloadContentType?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    secretRef?: pulumi.Input<string>;
    secretType?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KeymanagerSecretV1Timeouts>;
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeymanagerSecretV1 resource.
 */
export interface KeymanagerSecretV1Args {
    acl?: pulumi.Input<inputs.KeymanagerSecretV1Acl>;
    algorithm?: pulumi.Input<string>;
    bitLength?: pulumi.Input<number>;
    expiration?: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    mode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    payload?: pulumi.Input<string>;
    payloadContentEncoding?: pulumi.Input<string>;
    payloadContentType?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    secretType?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KeymanagerSecretV1Timeouts>;
}
