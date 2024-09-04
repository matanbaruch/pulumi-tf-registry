// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IotLogging extends pulumi.CustomResource {
    /**
     * Get an existing IotLogging resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotLoggingState, opts?: pulumi.CustomResourceOptions): IotLogging {
        return new IotLogging(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/iotLogging:IotLogging';

    /**
     * Returns true if the given object is an instance of IotLogging.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotLogging {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotLogging.__pulumiType;
    }

    /**
     * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
     */
    public readonly defaultLogLevel!: pulumi.Output<string>;
    /**
     * The ARN of the role that allows IoT to write to Cloudwatch logs.
     */
    public readonly roleArn!: pulumi.Output<string>;

    /**
     * Create a IotLogging resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotLoggingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotLoggingArgs | IotLoggingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotLoggingState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["defaultLogLevel"] = state ? state.defaultLogLevel : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
        } else {
            const args = argsOrState as IotLoggingArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.defaultLogLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultLogLevel'");
            }
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["defaultLogLevel"] = args ? args.defaultLogLevel : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotLogging.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotLogging resources.
 */
export interface IotLoggingState {
    /**
     * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
     */
    accountId?: pulumi.Input<string>;
    /**
     * The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
     */
    defaultLogLevel?: pulumi.Input<string>;
    /**
     * The ARN of the role that allows IoT to write to Cloudwatch logs.
     */
    roleArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IotLogging resource.
 */
export interface IotLoggingArgs {
    /**
     * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
     */
    accountId: pulumi.Input<string>;
    /**
     * The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
     */
    defaultLogLevel: pulumi.Input<string>;
    /**
     * The ARN of the role that allows IoT to write to Cloudwatch logs.
     */
    roleArn: pulumi.Input<string>;
}
