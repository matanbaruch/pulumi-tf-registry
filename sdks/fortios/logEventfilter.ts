// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LogEventfilter extends pulumi.CustomResource {
    /**
     * Get an existing LogEventfilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogEventfilterState, opts?: pulumi.CustomResourceOptions): LogEventfilter {
        return new LogEventfilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/logEventfilter:LogEventfilter';

    /**
     * Returns true if the given object is an instance of LogEventfilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogEventfilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogEventfilter.__pulumiType;
    }

    public readonly cifs!: pulumi.Output<string>;
    public readonly complianceCheck!: pulumi.Output<string>;
    public readonly connector!: pulumi.Output<string>;
    public readonly endpoint!: pulumi.Output<string>;
    public readonly event!: pulumi.Output<string>;
    public readonly fortiextender!: pulumi.Output<string>;
    public readonly ha!: pulumi.Output<string>;
    public readonly restApi!: pulumi.Output<string>;
    public readonly router!: pulumi.Output<string>;
    public readonly sdwan!: pulumi.Output<string>;
    public readonly securityRating!: pulumi.Output<string>;
    public readonly switchController!: pulumi.Output<string>;
    public readonly system!: pulumi.Output<string>;
    public readonly user!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;
    public readonly vpn!: pulumi.Output<string>;
    public readonly wanOpt!: pulumi.Output<string>;
    public readonly webproxy!: pulumi.Output<string>;
    public readonly wirelessActivity!: pulumi.Output<string>;

    /**
     * Create a LogEventfilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LogEventfilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogEventfilterArgs | LogEventfilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogEventfilterState | undefined;
            resourceInputs["cifs"] = state ? state.cifs : undefined;
            resourceInputs["complianceCheck"] = state ? state.complianceCheck : undefined;
            resourceInputs["connector"] = state ? state.connector : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["event"] = state ? state.event : undefined;
            resourceInputs["fortiextender"] = state ? state.fortiextender : undefined;
            resourceInputs["ha"] = state ? state.ha : undefined;
            resourceInputs["restApi"] = state ? state.restApi : undefined;
            resourceInputs["router"] = state ? state.router : undefined;
            resourceInputs["sdwan"] = state ? state.sdwan : undefined;
            resourceInputs["securityRating"] = state ? state.securityRating : undefined;
            resourceInputs["switchController"] = state ? state.switchController : undefined;
            resourceInputs["system"] = state ? state.system : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
            resourceInputs["vpn"] = state ? state.vpn : undefined;
            resourceInputs["wanOpt"] = state ? state.wanOpt : undefined;
            resourceInputs["webproxy"] = state ? state.webproxy : undefined;
            resourceInputs["wirelessActivity"] = state ? state.wirelessActivity : undefined;
        } else {
            const args = argsOrState as LogEventfilterArgs | undefined;
            resourceInputs["cifs"] = args ? args.cifs : undefined;
            resourceInputs["complianceCheck"] = args ? args.complianceCheck : undefined;
            resourceInputs["connector"] = args ? args.connector : undefined;
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["event"] = args ? args.event : undefined;
            resourceInputs["fortiextender"] = args ? args.fortiextender : undefined;
            resourceInputs["ha"] = args ? args.ha : undefined;
            resourceInputs["restApi"] = args ? args.restApi : undefined;
            resourceInputs["router"] = args ? args.router : undefined;
            resourceInputs["sdwan"] = args ? args.sdwan : undefined;
            resourceInputs["securityRating"] = args ? args.securityRating : undefined;
            resourceInputs["switchController"] = args ? args.switchController : undefined;
            resourceInputs["system"] = args ? args.system : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
            resourceInputs["vpn"] = args ? args.vpn : undefined;
            resourceInputs["wanOpt"] = args ? args.wanOpt : undefined;
            resourceInputs["webproxy"] = args ? args.webproxy : undefined;
            resourceInputs["wirelessActivity"] = args ? args.wirelessActivity : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogEventfilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogEventfilter resources.
 */
export interface LogEventfilterState {
    cifs?: pulumi.Input<string>;
    complianceCheck?: pulumi.Input<string>;
    connector?: pulumi.Input<string>;
    endpoint?: pulumi.Input<string>;
    event?: pulumi.Input<string>;
    fortiextender?: pulumi.Input<string>;
    ha?: pulumi.Input<string>;
    restApi?: pulumi.Input<string>;
    router?: pulumi.Input<string>;
    sdwan?: pulumi.Input<string>;
    securityRating?: pulumi.Input<string>;
    switchController?: pulumi.Input<string>;
    system?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
    vpn?: pulumi.Input<string>;
    wanOpt?: pulumi.Input<string>;
    webproxy?: pulumi.Input<string>;
    wirelessActivity?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogEventfilter resource.
 */
export interface LogEventfilterArgs {
    cifs?: pulumi.Input<string>;
    complianceCheck?: pulumi.Input<string>;
    connector?: pulumi.Input<string>;
    endpoint?: pulumi.Input<string>;
    event?: pulumi.Input<string>;
    fortiextender?: pulumi.Input<string>;
    ha?: pulumi.Input<string>;
    restApi?: pulumi.Input<string>;
    router?: pulumi.Input<string>;
    sdwan?: pulumi.Input<string>;
    securityRating?: pulumi.Input<string>;
    switchController?: pulumi.Input<string>;
    system?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
    vpn?: pulumi.Input<string>;
    wanOpt?: pulumi.Input<string>;
    webproxy?: pulumi.Input<string>;
    wirelessActivity?: pulumi.Input<string>;
}
