// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SecretsSyncAwsDestination extends pulumi.CustomResource {
    /**
     * Get an existing SecretsSyncAwsDestination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretsSyncAwsDestinationState, opts?: pulumi.CustomResourceOptions): SecretsSyncAwsDestination {
        return new SecretsSyncAwsDestination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/secretsSyncAwsDestination:SecretsSyncAwsDestination';

    /**
     * Returns true if the given object is an instance of SecretsSyncAwsDestination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecretsSyncAwsDestination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecretsSyncAwsDestination.__pulumiType;
    }

    /**
     * Access key id to authenticate against the AWS secrets manager.
     */
    public readonly accessKeyId!: pulumi.Output<string | undefined>;
    /**
     * Custom tags to set on the secret managed at the destination.
     */
    public readonly customTags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Extra protection that must match the trust policy granting access to the AWS IAM role ARN.
     */
    public readonly externalId!: pulumi.Output<string | undefined>;
    /**
     * Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or
     * 'secret-key'
     */
    public readonly granularity!: pulumi.Output<string | undefined>;
    /**
     * Unique name of the AWS destination.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Region where to manage the secrets manager entries.
     */
    public readonly region!: pulumi.Output<string | undefined>;
    /**
     * Specifies a role to assume when connecting to AWS.
     */
    public readonly roleArn!: pulumi.Output<string | undefined>;
    /**
     * Secret access key to authenticate against the AWS secrets manager.
     */
    public readonly secretAccessKey!: pulumi.Output<string | undefined>;
    /**
     * Template describing how to generate external secret names.
     */
    public readonly secretNameTemplate!: pulumi.Output<string>;
    /**
     * Type of secrets destination.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SecretsSyncAwsDestination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SecretsSyncAwsDestinationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecretsSyncAwsDestinationArgs | SecretsSyncAwsDestinationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecretsSyncAwsDestinationState | undefined;
            resourceInputs["accessKeyId"] = state ? state.accessKeyId : undefined;
            resourceInputs["customTags"] = state ? state.customTags : undefined;
            resourceInputs["externalId"] = state ? state.externalId : undefined;
            resourceInputs["granularity"] = state ? state.granularity : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["secretAccessKey"] = state ? state.secretAccessKey : undefined;
            resourceInputs["secretNameTemplate"] = state ? state.secretNameTemplate : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as SecretsSyncAwsDestinationArgs | undefined;
            resourceInputs["accessKeyId"] = args ? args.accessKeyId : undefined;
            resourceInputs["customTags"] = args ? args.customTags : undefined;
            resourceInputs["externalId"] = args ? args.externalId : undefined;
            resourceInputs["granularity"] = args ? args.granularity : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["secretAccessKey"] = args?.secretAccessKey ? pulumi.secret(args.secretAccessKey) : undefined;
            resourceInputs["secretNameTemplate"] = args ? args.secretNameTemplate : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["secretAccessKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SecretsSyncAwsDestination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecretsSyncAwsDestination resources.
 */
export interface SecretsSyncAwsDestinationState {
    /**
     * Access key id to authenticate against the AWS secrets manager.
     */
    accessKeyId?: pulumi.Input<string>;
    /**
     * Custom tags to set on the secret managed at the destination.
     */
    customTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Extra protection that must match the trust policy granting access to the AWS IAM role ARN.
     */
    externalId?: pulumi.Input<string>;
    /**
     * Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or
     * 'secret-key'
     */
    granularity?: pulumi.Input<string>;
    /**
     * Unique name of the AWS destination.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Region where to manage the secrets manager entries.
     */
    region?: pulumi.Input<string>;
    /**
     * Specifies a role to assume when connecting to AWS.
     */
    roleArn?: pulumi.Input<string>;
    /**
     * Secret access key to authenticate against the AWS secrets manager.
     */
    secretAccessKey?: pulumi.Input<string>;
    /**
     * Template describing how to generate external secret names.
     */
    secretNameTemplate?: pulumi.Input<string>;
    /**
     * Type of secrets destination.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecretsSyncAwsDestination resource.
 */
export interface SecretsSyncAwsDestinationArgs {
    /**
     * Access key id to authenticate against the AWS secrets manager.
     */
    accessKeyId?: pulumi.Input<string>;
    /**
     * Custom tags to set on the secret managed at the destination.
     */
    customTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Extra protection that must match the trust policy granting access to the AWS IAM role ARN.
     */
    externalId?: pulumi.Input<string>;
    /**
     * Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or
     * 'secret-key'
     */
    granularity?: pulumi.Input<string>;
    /**
     * Unique name of the AWS destination.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Region where to manage the secrets manager entries.
     */
    region?: pulumi.Input<string>;
    /**
     * Specifies a role to assume when connecting to AWS.
     */
    roleArn?: pulumi.Input<string>;
    /**
     * Secret access key to authenticate against the AWS secrets manager.
     */
    secretAccessKey?: pulumi.Input<string>;
    /**
     * Template describing how to generate external secret names.
     */
    secretNameTemplate?: pulumi.Input<string>;
}
