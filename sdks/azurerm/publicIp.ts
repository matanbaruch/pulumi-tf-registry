// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PublicIp extends pulumi.CustomResource {
    /**
     * Get an existing PublicIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIpState, opts?: pulumi.CustomResourceOptions): PublicIp {
        return new PublicIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/publicIp:PublicIp';

    /**
     * Returns true if the given object is an instance of PublicIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicIp.__pulumiType;
    }

    public readonly allocationMethod!: pulumi.Output<string>;
    public readonly ddosProtectionMode!: pulumi.Output<string | undefined>;
    public readonly ddosProtectionPlanId!: pulumi.Output<string | undefined>;
    public readonly domainNameLabel!: pulumi.Output<string | undefined>;
    public readonly edgeZone!: pulumi.Output<string | undefined>;
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    public readonly idleTimeoutInMinutes!: pulumi.Output<number | undefined>;
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    public readonly ipTags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly ipVersion!: pulumi.Output<string | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly publicIpPrefixId!: pulumi.Output<string | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly reverseFqdn!: pulumi.Output<string | undefined>;
    public readonly sku!: pulumi.Output<string | undefined>;
    public readonly skuTier!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.PublicIpTimeouts | undefined>;
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PublicIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PublicIpArgs | PublicIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PublicIpState | undefined;
            resourceInputs["allocationMethod"] = state ? state.allocationMethod : undefined;
            resourceInputs["ddosProtectionMode"] = state ? state.ddosProtectionMode : undefined;
            resourceInputs["ddosProtectionPlanId"] = state ? state.ddosProtectionPlanId : undefined;
            resourceInputs["domainNameLabel"] = state ? state.domainNameLabel : undefined;
            resourceInputs["edgeZone"] = state ? state.edgeZone : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["idleTimeoutInMinutes"] = state ? state.idleTimeoutInMinutes : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["ipTags"] = state ? state.ipTags : undefined;
            resourceInputs["ipVersion"] = state ? state.ipVersion : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["publicIpPrefixId"] = state ? state.publicIpPrefixId : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["reverseFqdn"] = state ? state.reverseFqdn : undefined;
            resourceInputs["sku"] = state ? state.sku : undefined;
            resourceInputs["skuTier"] = state ? state.skuTier : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as PublicIpArgs | undefined;
            if ((!args || args.allocationMethod === undefined) && !opts.urn) {
                throw new Error("Missing required property 'allocationMethod'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allocationMethod"] = args ? args.allocationMethod : undefined;
            resourceInputs["ddosProtectionMode"] = args ? args.ddosProtectionMode : undefined;
            resourceInputs["ddosProtectionPlanId"] = args ? args.ddosProtectionPlanId : undefined;
            resourceInputs["domainNameLabel"] = args ? args.domainNameLabel : undefined;
            resourceInputs["edgeZone"] = args ? args.edgeZone : undefined;
            resourceInputs["idleTimeoutInMinutes"] = args ? args.idleTimeoutInMinutes : undefined;
            resourceInputs["ipTags"] = args ? args.ipTags : undefined;
            resourceInputs["ipVersion"] = args ? args.ipVersion : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicIpPrefixId"] = args ? args.publicIpPrefixId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["reverseFqdn"] = args ? args.reverseFqdn : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["skuTier"] = args ? args.skuTier : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PublicIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PublicIp resources.
 */
export interface PublicIpState {
    allocationMethod?: pulumi.Input<string>;
    ddosProtectionMode?: pulumi.Input<string>;
    ddosProtectionPlanId?: pulumi.Input<string>;
    domainNameLabel?: pulumi.Input<string>;
    edgeZone?: pulumi.Input<string>;
    fqdn?: pulumi.Input<string>;
    idleTimeoutInMinutes?: pulumi.Input<number>;
    ipAddress?: pulumi.Input<string>;
    ipTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    ipVersion?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    publicIpPrefixId?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    reverseFqdn?: pulumi.Input<string>;
    sku?: pulumi.Input<string>;
    skuTier?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PublicIpTimeouts>;
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a PublicIp resource.
 */
export interface PublicIpArgs {
    allocationMethod: pulumi.Input<string>;
    ddosProtectionMode?: pulumi.Input<string>;
    ddosProtectionPlanId?: pulumi.Input<string>;
    domainNameLabel?: pulumi.Input<string>;
    edgeZone?: pulumi.Input<string>;
    idleTimeoutInMinutes?: pulumi.Input<number>;
    ipTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    ipVersion?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    publicIpPrefixId?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    reverseFqdn?: pulumi.Input<string>;
    sku?: pulumi.Input<string>;
    skuTier?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PublicIpTimeouts>;
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
