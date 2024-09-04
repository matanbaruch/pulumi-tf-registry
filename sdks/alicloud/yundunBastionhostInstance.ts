// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class YundunBastionhostInstance extends pulumi.CustomResource {
    /**
     * Get an existing YundunBastionhostInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: YundunBastionhostInstanceState, opts?: pulumi.CustomResourceOptions): YundunBastionhostInstance {
        return new YundunBastionhostInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/yundunBastionhostInstance:YundunBastionhostInstance';

    /**
     * Returns true if the given object is an instance of YundunBastionhostInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is YundunBastionhostInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === YundunBastionhostInstance.__pulumiType;
    }

    public readonly adAuthServers!: pulumi.Output<outputs.YundunBastionhostInstanceAdAuthServer[] | undefined>;
    public readonly bandwidth!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly enablePublicAccess!: pulumi.Output<boolean>;
    public readonly ldapAuthServers!: pulumi.Output<outputs.YundunBastionhostInstanceLdapAuthServer[] | undefined>;
    public readonly licenseCode!: pulumi.Output<string>;
    public readonly period!: pulumi.Output<number | undefined>;
    public readonly planCode!: pulumi.Output<string>;
    public readonly publicWhiteLists!: pulumi.Output<string[] | undefined>;
    public readonly renewPeriod!: pulumi.Output<number | undefined>;
    public readonly renewalPeriodUnit!: pulumi.Output<string>;
    public readonly renewalStatus!: pulumi.Output<string>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    public readonly storage!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.YundunBastionhostInstanceTimeouts | undefined>;
    public readonly vswitchId!: pulumi.Output<string>;

    /**
     * Create a YundunBastionhostInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: YundunBastionhostInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: YundunBastionhostInstanceArgs | YundunBastionhostInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as YundunBastionhostInstanceState | undefined;
            resourceInputs["adAuthServers"] = state ? state.adAuthServers : undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enablePublicAccess"] = state ? state.enablePublicAccess : undefined;
            resourceInputs["ldapAuthServers"] = state ? state.ldapAuthServers : undefined;
            resourceInputs["licenseCode"] = state ? state.licenseCode : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["planCode"] = state ? state.planCode : undefined;
            resourceInputs["publicWhiteLists"] = state ? state.publicWhiteLists : undefined;
            resourceInputs["renewPeriod"] = state ? state.renewPeriod : undefined;
            resourceInputs["renewalPeriodUnit"] = state ? state.renewalPeriodUnit : undefined;
            resourceInputs["renewalStatus"] = state ? state.renewalStatus : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["storage"] = state ? state.storage : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vswitchId"] = state ? state.vswitchId : undefined;
        } else {
            const args = argsOrState as YundunBastionhostInstanceArgs | undefined;
            if ((!args || args.bandwidth === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bandwidth'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.licenseCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseCode'");
            }
            if ((!args || args.planCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'planCode'");
            }
            if ((!args || args.securityGroupIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroupIds'");
            }
            if ((!args || args.storage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storage'");
            }
            if ((!args || args.vswitchId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vswitchId'");
            }
            resourceInputs["adAuthServers"] = args ? args.adAuthServers : undefined;
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enablePublicAccess"] = args ? args.enablePublicAccess : undefined;
            resourceInputs["ldapAuthServers"] = args ? args.ldapAuthServers : undefined;
            resourceInputs["licenseCode"] = args ? args.licenseCode : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["planCode"] = args ? args.planCode : undefined;
            resourceInputs["publicWhiteLists"] = args ? args.publicWhiteLists : undefined;
            resourceInputs["renewPeriod"] = args ? args.renewPeriod : undefined;
            resourceInputs["renewalPeriodUnit"] = args ? args.renewalPeriodUnit : undefined;
            resourceInputs["renewalStatus"] = args ? args.renewalStatus : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vswitchId"] = args ? args.vswitchId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(YundunBastionhostInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering YundunBastionhostInstance resources.
 */
export interface YundunBastionhostInstanceState {
    adAuthServers?: pulumi.Input<pulumi.Input<inputs.YundunBastionhostInstanceAdAuthServer>[]>;
    bandwidth?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enablePublicAccess?: pulumi.Input<boolean>;
    ldapAuthServers?: pulumi.Input<pulumi.Input<inputs.YundunBastionhostInstanceLdapAuthServer>[]>;
    licenseCode?: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    planCode?: pulumi.Input<string>;
    publicWhiteLists?: pulumi.Input<pulumi.Input<string>[]>;
    renewPeriod?: pulumi.Input<number>;
    renewalPeriodUnit?: pulumi.Input<string>;
    renewalStatus?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    storage?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.YundunBastionhostInstanceTimeouts>;
    vswitchId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a YundunBastionhostInstance resource.
 */
export interface YundunBastionhostInstanceArgs {
    adAuthServers?: pulumi.Input<pulumi.Input<inputs.YundunBastionhostInstanceAdAuthServer>[]>;
    bandwidth: pulumi.Input<string>;
    description: pulumi.Input<string>;
    enablePublicAccess?: pulumi.Input<boolean>;
    ldapAuthServers?: pulumi.Input<pulumi.Input<inputs.YundunBastionhostInstanceLdapAuthServer>[]>;
    licenseCode: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    planCode: pulumi.Input<string>;
    publicWhiteLists?: pulumi.Input<pulumi.Input<string>[]>;
    renewPeriod?: pulumi.Input<number>;
    renewalPeriodUnit?: pulumi.Input<string>;
    renewalStatus?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    securityGroupIds: pulumi.Input<pulumi.Input<string>[]>;
    storage: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.YundunBastionhostInstanceTimeouts>;
    vswitchId: pulumi.Input<string>;
}
