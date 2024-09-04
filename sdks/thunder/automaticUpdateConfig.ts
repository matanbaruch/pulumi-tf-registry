// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AutomaticUpdateConfig extends pulumi.CustomResource {
    /**
     * Get an existing AutomaticUpdateConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutomaticUpdateConfigState, opts?: pulumi.CustomResourceOptions): AutomaticUpdateConfig {
        return new AutomaticUpdateConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/automaticUpdateConfig:AutomaticUpdateConfig';

    /**
     * Returns true if the given object is an instance of AutomaticUpdateConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutomaticUpdateConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutomaticUpdateConfig.__pulumiType;
    }

    /**
     * Every day
     */
    public readonly daily!: pulumi.Output<number | undefined>;
    /**
     * Time of day to update (hh:mm) in 24 hour local time
     */
    public readonly dayTime!: pulumi.Output<string | undefined>;
    /**
     * Enable libcurl debug option
     */
    public readonly debug!: pulumi.Output<number | undefined>;
    /**
     * Disable peer server certificate verification
     */
    public readonly disableSslVerify!: pulumi.Output<number | undefined>;
    /**
     * 'app-fw': Application Firewall Configuration; 'ca-bundle': CA Certificate Bundle; 'a10-threat-intel': A10 Threat intel
     * class list; 'central-cert-pin-list': Central updated cert pinning list;
     */
    public readonly featureName!: pulumi.Output<string>;
    public readonly schedule!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * 'Monday': Monday; 'Tuesday': Tuesday; 'Wednesday': Wednesday; 'Thursday': Thursday; 'Friday': Friday; 'Saturday':
     * Saturday; 'Sunday': Sunday;
     */
    public readonly weekDay!: pulumi.Output<string | undefined>;
    /**
     * Time of day to update (hh:mm) in 24 hour local time
     */
    public readonly weekTime!: pulumi.Output<string | undefined>;
    /**
     * Every week
     */
    public readonly weekly!: pulumi.Output<number | undefined>;

    /**
     * Create a AutomaticUpdateConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomaticUpdateConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutomaticUpdateConfigArgs | AutomaticUpdateConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutomaticUpdateConfigState | undefined;
            resourceInputs["daily"] = state ? state.daily : undefined;
            resourceInputs["dayTime"] = state ? state.dayTime : undefined;
            resourceInputs["debug"] = state ? state.debug : undefined;
            resourceInputs["disableSslVerify"] = state ? state.disableSslVerify : undefined;
            resourceInputs["featureName"] = state ? state.featureName : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["weekDay"] = state ? state.weekDay : undefined;
            resourceInputs["weekTime"] = state ? state.weekTime : undefined;
            resourceInputs["weekly"] = state ? state.weekly : undefined;
        } else {
            const args = argsOrState as AutomaticUpdateConfigArgs | undefined;
            if ((!args || args.featureName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'featureName'");
            }
            resourceInputs["daily"] = args ? args.daily : undefined;
            resourceInputs["dayTime"] = args ? args.dayTime : undefined;
            resourceInputs["debug"] = args ? args.debug : undefined;
            resourceInputs["disableSslVerify"] = args ? args.disableSslVerify : undefined;
            resourceInputs["featureName"] = args ? args.featureName : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["weekDay"] = args ? args.weekDay : undefined;
            resourceInputs["weekTime"] = args ? args.weekTime : undefined;
            resourceInputs["weekly"] = args ? args.weekly : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutomaticUpdateConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutomaticUpdateConfig resources.
 */
export interface AutomaticUpdateConfigState {
    /**
     * Every day
     */
    daily?: pulumi.Input<number>;
    /**
     * Time of day to update (hh:mm) in 24 hour local time
     */
    dayTime?: pulumi.Input<string>;
    /**
     * Enable libcurl debug option
     */
    debug?: pulumi.Input<number>;
    /**
     * Disable peer server certificate verification
     */
    disableSslVerify?: pulumi.Input<number>;
    /**
     * 'app-fw': Application Firewall Configuration; 'ca-bundle': CA Certificate Bundle; 'a10-threat-intel': A10 Threat intel
     * class list; 'central-cert-pin-list': Central updated cert pinning list;
     */
    featureName?: pulumi.Input<string>;
    schedule?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * 'Monday': Monday; 'Tuesday': Tuesday; 'Wednesday': Wednesday; 'Thursday': Thursday; 'Friday': Friday; 'Saturday':
     * Saturday; 'Sunday': Sunday;
     */
    weekDay?: pulumi.Input<string>;
    /**
     * Time of day to update (hh:mm) in 24 hour local time
     */
    weekTime?: pulumi.Input<string>;
    /**
     * Every week
     */
    weekly?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a AutomaticUpdateConfig resource.
 */
export interface AutomaticUpdateConfigArgs {
    /**
     * Every day
     */
    daily?: pulumi.Input<number>;
    /**
     * Time of day to update (hh:mm) in 24 hour local time
     */
    dayTime?: pulumi.Input<string>;
    /**
     * Enable libcurl debug option
     */
    debug?: pulumi.Input<number>;
    /**
     * Disable peer server certificate verification
     */
    disableSslVerify?: pulumi.Input<number>;
    /**
     * 'app-fw': Application Firewall Configuration; 'ca-bundle': CA Certificate Bundle; 'a10-threat-intel': A10 Threat intel
     * class list; 'central-cert-pin-list': Central updated cert pinning list;
     */
    featureName: pulumi.Input<string>;
    schedule?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * 'Monday': Monday; 'Tuesday': Tuesday; 'Wednesday': Wednesday; 'Thursday': Thursday; 'Friday': Friday; 'Saturday':
     * Saturday; 'Sunday': Sunday;
     */
    weekDay?: pulumi.Input<string>;
    /**
     * Time of day to update (hh:mm) in 24 hour local time
     */
    weekTime?: pulumi.Input<string>;
    /**
     * Every week
     */
    weekly?: pulumi.Input<number>;
}
