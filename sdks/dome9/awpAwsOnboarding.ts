// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AwpAwsOnboarding extends pulumi.CustomResource {
    /**
     * Get an existing AwpAwsOnboarding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AwpAwsOnboardingState, opts?: pulumi.CustomResourceOptions): AwpAwsOnboarding {
        return new AwpAwsOnboarding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dome9:index/awpAwsOnboarding:AwpAwsOnboarding';

    /**
     * Returns true if the given object is an instance of AwpAwsOnboarding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AwpAwsOnboarding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AwpAwsOnboarding.__pulumiType;
    }

    public readonly agentlessAccountSettings!: pulumi.Output<outputs.AwpAwsOnboardingAgentlessAccountSettings | undefined>;
    public /*out*/ readonly agentlessProtectionEnabled!: pulumi.Output<boolean>;
    public readonly awpCentralizedCloudAccountId!: pulumi.Output<string | undefined>;
    public /*out*/ readonly cloudAccountId!: pulumi.Output<string>;
    public /*out*/ readonly cloudProvider!: pulumi.Output<string>;
    public readonly cloudguardAccountId!: pulumi.Output<string>;
    public readonly crossAccountRoleExternalId!: pulumi.Output<string>;
    public readonly crossAccountRoleName!: pulumi.Output<string>;
    public readonly forceDelete!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly isOrgOnboarding!: pulumi.Output<boolean>;
    public /*out*/ readonly missingAwpPrivateNetworkRegions!: pulumi.Output<string[]>;
    public readonly scanMode!: pulumi.Output<string>;
    public readonly shouldCreatePolicy!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly shouldUpdate!: pulumi.Output<boolean>;

    /**
     * Create a AwpAwsOnboarding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AwpAwsOnboardingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AwpAwsOnboardingArgs | AwpAwsOnboardingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AwpAwsOnboardingState | undefined;
            resourceInputs["agentlessAccountSettings"] = state ? state.agentlessAccountSettings : undefined;
            resourceInputs["agentlessProtectionEnabled"] = state ? state.agentlessProtectionEnabled : undefined;
            resourceInputs["awpCentralizedCloudAccountId"] = state ? state.awpCentralizedCloudAccountId : undefined;
            resourceInputs["cloudAccountId"] = state ? state.cloudAccountId : undefined;
            resourceInputs["cloudProvider"] = state ? state.cloudProvider : undefined;
            resourceInputs["cloudguardAccountId"] = state ? state.cloudguardAccountId : undefined;
            resourceInputs["crossAccountRoleExternalId"] = state ? state.crossAccountRoleExternalId : undefined;
            resourceInputs["crossAccountRoleName"] = state ? state.crossAccountRoleName : undefined;
            resourceInputs["forceDelete"] = state ? state.forceDelete : undefined;
            resourceInputs["isOrgOnboarding"] = state ? state.isOrgOnboarding : undefined;
            resourceInputs["missingAwpPrivateNetworkRegions"] = state ? state.missingAwpPrivateNetworkRegions : undefined;
            resourceInputs["scanMode"] = state ? state.scanMode : undefined;
            resourceInputs["shouldCreatePolicy"] = state ? state.shouldCreatePolicy : undefined;
            resourceInputs["shouldUpdate"] = state ? state.shouldUpdate : undefined;
        } else {
            const args = argsOrState as AwpAwsOnboardingArgs | undefined;
            if ((!args || args.cloudguardAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudguardAccountId'");
            }
            if ((!args || args.crossAccountRoleExternalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'crossAccountRoleExternalId'");
            }
            if ((!args || args.crossAccountRoleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'crossAccountRoleName'");
            }
            if ((!args || args.scanMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scanMode'");
            }
            resourceInputs["agentlessAccountSettings"] = args ? args.agentlessAccountSettings : undefined;
            resourceInputs["awpCentralizedCloudAccountId"] = args ? args.awpCentralizedCloudAccountId : undefined;
            resourceInputs["cloudguardAccountId"] = args ? args.cloudguardAccountId : undefined;
            resourceInputs["crossAccountRoleExternalId"] = args ? args.crossAccountRoleExternalId : undefined;
            resourceInputs["crossAccountRoleName"] = args ? args.crossAccountRoleName : undefined;
            resourceInputs["forceDelete"] = args ? args.forceDelete : undefined;
            resourceInputs["scanMode"] = args ? args.scanMode : undefined;
            resourceInputs["shouldCreatePolicy"] = args ? args.shouldCreatePolicy : undefined;
            resourceInputs["agentlessProtectionEnabled"] = undefined /*out*/;
            resourceInputs["cloudAccountId"] = undefined /*out*/;
            resourceInputs["cloudProvider"] = undefined /*out*/;
            resourceInputs["isOrgOnboarding"] = undefined /*out*/;
            resourceInputs["missingAwpPrivateNetworkRegions"] = undefined /*out*/;
            resourceInputs["shouldUpdate"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AwpAwsOnboarding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AwpAwsOnboarding resources.
 */
export interface AwpAwsOnboardingState {
    agentlessAccountSettings?: pulumi.Input<inputs.AwpAwsOnboardingAgentlessAccountSettings>;
    agentlessProtectionEnabled?: pulumi.Input<boolean>;
    awpCentralizedCloudAccountId?: pulumi.Input<string>;
    cloudAccountId?: pulumi.Input<string>;
    cloudProvider?: pulumi.Input<string>;
    cloudguardAccountId?: pulumi.Input<string>;
    crossAccountRoleExternalId?: pulumi.Input<string>;
    crossAccountRoleName?: pulumi.Input<string>;
    forceDelete?: pulumi.Input<boolean>;
    isOrgOnboarding?: pulumi.Input<boolean>;
    missingAwpPrivateNetworkRegions?: pulumi.Input<pulumi.Input<string>[]>;
    scanMode?: pulumi.Input<string>;
    shouldCreatePolicy?: pulumi.Input<boolean>;
    shouldUpdate?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a AwpAwsOnboarding resource.
 */
export interface AwpAwsOnboardingArgs {
    agentlessAccountSettings?: pulumi.Input<inputs.AwpAwsOnboardingAgentlessAccountSettings>;
    awpCentralizedCloudAccountId?: pulumi.Input<string>;
    cloudguardAccountId: pulumi.Input<string>;
    crossAccountRoleExternalId: pulumi.Input<string>;
    crossAccountRoleName: pulumi.Input<string>;
    forceDelete?: pulumi.Input<boolean>;
    scanMode: pulumi.Input<string>;
    shouldCreatePolicy?: pulumi.Input<boolean>;
}
