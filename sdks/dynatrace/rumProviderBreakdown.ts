// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RumProviderBreakdown extends pulumi.CustomResource {
    /**
     * Get an existing RumProviderBreakdown resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RumProviderBreakdownState, opts?: pulumi.CustomResourceOptions): RumProviderBreakdown {
        return new RumProviderBreakdown(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/rumProviderBreakdown:RumProviderBreakdown';

    /**
     * Returns true if the given object is an instance of RumProviderBreakdown.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RumProviderBreakdown {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RumProviderBreakdown.__pulumiType;
    }

    /**
     * Domain name pattern
     */
    public readonly domainNamePatternList!: pulumi.Output<outputs.RumProviderBreakdownDomainNamePatternList>;
    /**
     * Specify an URL for the provider's brand icon
     */
    public readonly iconUrl!: pulumi.Output<string | undefined>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    public readonly insertAfter!: pulumi.Output<string>;
    /**
     * Send the patterns of this provider to Dynatrace to help us improve 3rd-party detection.
     */
    public readonly reportPublicImprovement!: pulumi.Output<boolean>;
    /**
     * Resource name
     */
    public readonly resourceName!: pulumi.Output<string>;
    /**
     * Possible Values: `FirstParty`, `ThirdParty`, `Cdn`
     */
    public readonly resourceType!: pulumi.Output<string>;

    /**
     * Create a RumProviderBreakdown resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RumProviderBreakdownArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RumProviderBreakdownArgs | RumProviderBreakdownState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RumProviderBreakdownState | undefined;
            resourceInputs["domainNamePatternList"] = state ? state.domainNamePatternList : undefined;
            resourceInputs["iconUrl"] = state ? state.iconUrl : undefined;
            resourceInputs["insertAfter"] = state ? state.insertAfter : undefined;
            resourceInputs["reportPublicImprovement"] = state ? state.reportPublicImprovement : undefined;
            resourceInputs["resourceName"] = state ? state.resourceName : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
        } else {
            const args = argsOrState as RumProviderBreakdownArgs | undefined;
            if ((!args || args.domainNamePatternList === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainNamePatternList'");
            }
            if ((!args || args.reportPublicImprovement === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reportPublicImprovement'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["domainNamePatternList"] = args ? args.domainNamePatternList : undefined;
            resourceInputs["iconUrl"] = args ? args.iconUrl : undefined;
            resourceInputs["insertAfter"] = args ? args.insertAfter : undefined;
            resourceInputs["reportPublicImprovement"] = args ? args.reportPublicImprovement : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RumProviderBreakdown.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RumProviderBreakdown resources.
 */
export interface RumProviderBreakdownState {
    /**
     * Domain name pattern
     */
    domainNamePatternList?: pulumi.Input<inputs.RumProviderBreakdownDomainNamePatternList>;
    /**
     * Specify an URL for the provider's brand icon
     */
    iconUrl?: pulumi.Input<string>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * Send the patterns of this provider to Dynatrace to help us improve 3rd-party detection.
     */
    reportPublicImprovement?: pulumi.Input<boolean>;
    /**
     * Resource name
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Possible Values: `FirstParty`, `ThirdParty`, `Cdn`
     */
    resourceType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RumProviderBreakdown resource.
 */
export interface RumProviderBreakdownArgs {
    /**
     * Domain name pattern
     */
    domainNamePatternList: pulumi.Input<inputs.RumProviderBreakdownDomainNamePatternList>;
    /**
     * Specify an URL for the provider's brand icon
     */
    iconUrl?: pulumi.Input<string>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * Send the patterns of this provider to Dynatrace to help us improve 3rd-party detection.
     */
    reportPublicImprovement: pulumi.Input<boolean>;
    /**
     * Resource name
     */
    resourceName: pulumi.Input<string>;
    /**
     * Possible Values: `FirstParty`, `ThirdParty`, `Cdn`
     */
    resourceType: pulumi.Input<string>;
}
