// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudCreds extends pulumi.CustomResource {
    /**
     * Get an existing CloudCreds resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudCredsState, opts?: pulumi.CustomResourceOptions): CloudCreds {
        return new CloudCreds(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prosimo:index/cloudCreds:CloudCreds';

    /**
     * Returns true if the given object is an instance of CloudCreds.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudCreds {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudCreds.__pulumiType;
    }

    /**
     * AWS options.
     */
    public readonly aws!: pulumi.Output<outputs.CloudCredsAws | undefined>;
    /**
     * AZURE options.
     */
    public readonly azure!: pulumi.Output<outputs.CloudCredsAzure | undefined>;
    /**
     * Bulk Account Onboarding options.
     */
    public readonly bulk!: pulumi.Output<outputs.CloudCredsBulk | undefined>;
    /**
     * Flag for bulk upload, set it to true if want to bulk onboard accounts: defaults to false
     */
    public readonly bulkOnboard!: pulumi.Output<boolean | undefined>;
    /**
     * Select Cloud Service Provider, e.g: AWS, AZURE, GCP
     */
    public readonly cloudType!: pulumi.Output<string>;
    /**
     * GCP options.
     */
    public readonly gcp!: pulumi.Output<outputs.CloudCredsGcp | undefined>;
    /**
     * Nickname of the cloud credential
     */
    public readonly nickname!: pulumi.Output<string>;

    /**
     * Create a CloudCreds resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudCredsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudCredsArgs | CloudCredsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudCredsState | undefined;
            resourceInputs["aws"] = state ? state.aws : undefined;
            resourceInputs["azure"] = state ? state.azure : undefined;
            resourceInputs["bulk"] = state ? state.bulk : undefined;
            resourceInputs["bulkOnboard"] = state ? state.bulkOnboard : undefined;
            resourceInputs["cloudType"] = state ? state.cloudType : undefined;
            resourceInputs["gcp"] = state ? state.gcp : undefined;
            resourceInputs["nickname"] = state ? state.nickname : undefined;
        } else {
            const args = argsOrState as CloudCredsArgs | undefined;
            if ((!args || args.cloudType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudType'");
            }
            if ((!args || args.nickname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nickname'");
            }
            resourceInputs["aws"] = args ? args.aws : undefined;
            resourceInputs["azure"] = args ? args.azure : undefined;
            resourceInputs["bulk"] = args ? args.bulk : undefined;
            resourceInputs["bulkOnboard"] = args ? args.bulkOnboard : undefined;
            resourceInputs["cloudType"] = args ? args.cloudType : undefined;
            resourceInputs["gcp"] = args ? args.gcp : undefined;
            resourceInputs["nickname"] = args ? args.nickname : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudCreds.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudCreds resources.
 */
export interface CloudCredsState {
    /**
     * AWS options.
     */
    aws?: pulumi.Input<inputs.CloudCredsAws>;
    /**
     * AZURE options.
     */
    azure?: pulumi.Input<inputs.CloudCredsAzure>;
    /**
     * Bulk Account Onboarding options.
     */
    bulk?: pulumi.Input<inputs.CloudCredsBulk>;
    /**
     * Flag for bulk upload, set it to true if want to bulk onboard accounts: defaults to false
     */
    bulkOnboard?: pulumi.Input<boolean>;
    /**
     * Select Cloud Service Provider, e.g: AWS, AZURE, GCP
     */
    cloudType?: pulumi.Input<string>;
    /**
     * GCP options.
     */
    gcp?: pulumi.Input<inputs.CloudCredsGcp>;
    /**
     * Nickname of the cloud credential
     */
    nickname?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudCreds resource.
 */
export interface CloudCredsArgs {
    /**
     * AWS options.
     */
    aws?: pulumi.Input<inputs.CloudCredsAws>;
    /**
     * AZURE options.
     */
    azure?: pulumi.Input<inputs.CloudCredsAzure>;
    /**
     * Bulk Account Onboarding options.
     */
    bulk?: pulumi.Input<inputs.CloudCredsBulk>;
    /**
     * Flag for bulk upload, set it to true if want to bulk onboard accounts: defaults to false
     */
    bulkOnboard?: pulumi.Input<boolean>;
    /**
     * Select Cloud Service Provider, e.g: AWS, AZURE, GCP
     */
    cloudType: pulumi.Input<string>;
    /**
     * GCP options.
     */
    gcp?: pulumi.Input<inputs.CloudCredsGcp>;
    /**
     * Nickname of the cloud credential
     */
    nickname: pulumi.Input<string>;
}
