// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Wafv2WebAclLoggingConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing Wafv2WebAclLoggingConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Wafv2WebAclLoggingConfigurationState, opts?: pulumi.CustomResourceOptions): Wafv2WebAclLoggingConfiguration {
        return new Wafv2WebAclLoggingConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/wafv2WebAclLoggingConfiguration:Wafv2WebAclLoggingConfiguration';

    /**
     * Returns true if the given object is an instance of Wafv2WebAclLoggingConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Wafv2WebAclLoggingConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Wafv2WebAclLoggingConfiguration.__pulumiType;
    }

    /**
     * AWS Kinesis Firehose Delivery Stream ARNs
     */
    public readonly logDestinationConfigs!: pulumi.Output<string[]>;
    public readonly loggingFilter!: pulumi.Output<outputs.Wafv2WebAclLoggingConfigurationLoggingFilter | undefined>;
    /**
     * Parts of the request to exclude from logs
     */
    public readonly redactedFields!: pulumi.Output<outputs.Wafv2WebAclLoggingConfigurationRedactedField[] | undefined>;
    /**
     * AWS WebACL ARN
     */
    public readonly resourceArn!: pulumi.Output<string>;

    /**
     * Create a Wafv2WebAclLoggingConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Wafv2WebAclLoggingConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Wafv2WebAclLoggingConfigurationArgs | Wafv2WebAclLoggingConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Wafv2WebAclLoggingConfigurationState | undefined;
            resourceInputs["logDestinationConfigs"] = state ? state.logDestinationConfigs : undefined;
            resourceInputs["loggingFilter"] = state ? state.loggingFilter : undefined;
            resourceInputs["redactedFields"] = state ? state.redactedFields : undefined;
            resourceInputs["resourceArn"] = state ? state.resourceArn : undefined;
        } else {
            const args = argsOrState as Wafv2WebAclLoggingConfigurationArgs | undefined;
            if ((!args || args.logDestinationConfigs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logDestinationConfigs'");
            }
            if ((!args || args.resourceArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceArn'");
            }
            resourceInputs["logDestinationConfigs"] = args ? args.logDestinationConfigs : undefined;
            resourceInputs["loggingFilter"] = args ? args.loggingFilter : undefined;
            resourceInputs["redactedFields"] = args ? args.redactedFields : undefined;
            resourceInputs["resourceArn"] = args ? args.resourceArn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Wafv2WebAclLoggingConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Wafv2WebAclLoggingConfiguration resources.
 */
export interface Wafv2WebAclLoggingConfigurationState {
    /**
     * AWS Kinesis Firehose Delivery Stream ARNs
     */
    logDestinationConfigs?: pulumi.Input<pulumi.Input<string>[]>;
    loggingFilter?: pulumi.Input<inputs.Wafv2WebAclLoggingConfigurationLoggingFilter>;
    /**
     * Parts of the request to exclude from logs
     */
    redactedFields?: pulumi.Input<pulumi.Input<inputs.Wafv2WebAclLoggingConfigurationRedactedField>[]>;
    /**
     * AWS WebACL ARN
     */
    resourceArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Wafv2WebAclLoggingConfiguration resource.
 */
export interface Wafv2WebAclLoggingConfigurationArgs {
    /**
     * AWS Kinesis Firehose Delivery Stream ARNs
     */
    logDestinationConfigs: pulumi.Input<pulumi.Input<string>[]>;
    loggingFilter?: pulumi.Input<inputs.Wafv2WebAclLoggingConfigurationLoggingFilter>;
    /**
     * Parts of the request to exclude from logs
     */
    redactedFields?: pulumi.Input<pulumi.Input<inputs.Wafv2WebAclLoggingConfigurationRedactedField>[]>;
    /**
     * AWS WebACL ARN
     */
    resourceArn: pulumi.Input<string>;
}
