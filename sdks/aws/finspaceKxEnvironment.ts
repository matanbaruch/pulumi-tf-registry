// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FinspaceKxEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing FinspaceKxEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FinspaceKxEnvironmentState, opts?: pulumi.CustomResourceOptions): FinspaceKxEnvironment {
        return new FinspaceKxEnvironment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/finspaceKxEnvironment:FinspaceKxEnvironment';

    /**
     * Returns true if the given object is an instance of FinspaceKxEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FinspaceKxEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FinspaceKxEnvironment.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly availabilityZones!: pulumi.Output<string[]>;
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    public readonly customDnsConfigurations!: pulumi.Output<outputs.FinspaceKxEnvironmentCustomDnsConfiguration[] | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly infrastructureAccountId!: pulumi.Output<string>;
    public readonly kmsKeyId!: pulumi.Output<string>;
    public /*out*/ readonly lastModifiedTimestamp!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.FinspaceKxEnvironmentTimeouts | undefined>;
    public readonly transitGatewayConfiguration!: pulumi.Output<outputs.FinspaceKxEnvironmentTransitGatewayConfiguration | undefined>;

    /**
     * Create a FinspaceKxEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FinspaceKxEnvironmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FinspaceKxEnvironmentArgs | FinspaceKxEnvironmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FinspaceKxEnvironmentState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            resourceInputs["createdTimestamp"] = state ? state.createdTimestamp : undefined;
            resourceInputs["customDnsConfigurations"] = state ? state.customDnsConfigurations : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["infrastructureAccountId"] = state ? state.infrastructureAccountId : undefined;
            resourceInputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            resourceInputs["lastModifiedTimestamp"] = state ? state.lastModifiedTimestamp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["transitGatewayConfiguration"] = state ? state.transitGatewayConfiguration : undefined;
        } else {
            const args = argsOrState as FinspaceKxEnvironmentArgs | undefined;
            if ((!args || args.kmsKeyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kmsKeyId'");
            }
            resourceInputs["customDnsConfigurations"] = args ? args.customDnsConfigurations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["transitGatewayConfiguration"] = args ? args.transitGatewayConfiguration : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["infrastructureAccountId"] = undefined /*out*/;
            resourceInputs["lastModifiedTimestamp"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FinspaceKxEnvironment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FinspaceKxEnvironment resources.
 */
export interface FinspaceKxEnvironmentState {
    arn?: pulumi.Input<string>;
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    createdTimestamp?: pulumi.Input<string>;
    customDnsConfigurations?: pulumi.Input<pulumi.Input<inputs.FinspaceKxEnvironmentCustomDnsConfiguration>[]>;
    description?: pulumi.Input<string>;
    infrastructureAccountId?: pulumi.Input<string>;
    kmsKeyId?: pulumi.Input<string>;
    lastModifiedTimestamp?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.FinspaceKxEnvironmentTimeouts>;
    transitGatewayConfiguration?: pulumi.Input<inputs.FinspaceKxEnvironmentTransitGatewayConfiguration>;
}

/**
 * The set of arguments for constructing a FinspaceKxEnvironment resource.
 */
export interface FinspaceKxEnvironmentArgs {
    customDnsConfigurations?: pulumi.Input<pulumi.Input<inputs.FinspaceKxEnvironmentCustomDnsConfiguration>[]>;
    description?: pulumi.Input<string>;
    kmsKeyId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.FinspaceKxEnvironmentTimeouts>;
    transitGatewayConfiguration?: pulumi.Input<inputs.FinspaceKxEnvironmentTransitGatewayConfiguration>;
}
