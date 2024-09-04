// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Securitygroup extends pulumi.CustomResource {
    /**
     * Get an existing Securitygroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecuritygroupState, opts?: pulumi.CustomResourceOptions): Securitygroup {
        return new Securitygroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gcorelabs:index/securitygroup:Securitygroup';

    /**
     * Returns true if the given object is an instance of Securitygroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Securitygroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Securitygroup.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly lastUpdated!: pulumi.Output<string>;
    public readonly metadataMap!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly metadataReadOnlies!: pulumi.Output<outputs.SecuritygroupMetadataReadOnly[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<number | undefined>;
    public readonly projectName!: pulumi.Output<string | undefined>;
    public readonly regionId!: pulumi.Output<number | undefined>;
    public readonly regionName!: pulumi.Output<string | undefined>;
    /**
     * Firewall rules control what inbound(ingress) and outbound(egress) traffic is allowed to enter or leave a Instance. At
     * least one 'egress' rule should be set
     */
    public readonly securityGroupRules!: pulumi.Output<outputs.SecuritygroupSecurityGroupRule[]>;

    /**
     * Create a Securitygroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecuritygroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecuritygroupArgs | SecuritygroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecuritygroupState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["metadataMap"] = state ? state.metadataMap : undefined;
            resourceInputs["metadataReadOnlies"] = state ? state.metadataReadOnlies : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["regionId"] = state ? state.regionId : undefined;
            resourceInputs["regionName"] = state ? state.regionName : undefined;
            resourceInputs["securityGroupRules"] = state ? state.securityGroupRules : undefined;
        } else {
            const args = argsOrState as SecuritygroupArgs | undefined;
            if ((!args || args.securityGroupRules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroupRules'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["metadataMap"] = args ? args.metadataMap : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["regionId"] = args ? args.regionId : undefined;
            resourceInputs["regionName"] = args ? args.regionName : undefined;
            resourceInputs["securityGroupRules"] = args ? args.securityGroupRules : undefined;
            resourceInputs["metadataReadOnlies"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Securitygroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Securitygroup resources.
 */
export interface SecuritygroupState {
    description?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    metadataMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    metadataReadOnlies?: pulumi.Input<pulumi.Input<inputs.SecuritygroupMetadataReadOnly>[]>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
    /**
     * Firewall rules control what inbound(ingress) and outbound(egress) traffic is allowed to enter or leave a Instance. At
     * least one 'egress' rule should be set
     */
    securityGroupRules?: pulumi.Input<pulumi.Input<inputs.SecuritygroupSecurityGroupRule>[]>;
}

/**
 * The set of arguments for constructing a Securitygroup resource.
 */
export interface SecuritygroupArgs {
    description?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    metadataMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
    /**
     * Firewall rules control what inbound(ingress) and outbound(egress) traffic is allowed to enter or leave a Instance. At
     * least one 'egress' rule should be set
     */
    securityGroupRules: pulumi.Input<pulumi.Input<inputs.SecuritygroupSecurityGroupRule>[]>;
}
