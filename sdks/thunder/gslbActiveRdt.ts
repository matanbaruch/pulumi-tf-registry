// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GslbActiveRdt extends pulumi.CustomResource {
    /**
     * Get an existing GslbActiveRdt resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbActiveRdtState, opts?: pulumi.CustomResourceOptions): GslbActiveRdt {
        return new GslbActiveRdt(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbActiveRdt:GslbActiveRdt';

    /**
     * Returns true if the given object is an instance of GslbActiveRdt.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbActiveRdt {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbActiveRdt.__pulumiType;
    }

    /**
     * Specify Query Domain (Specify Domain Name)
     */
    public readonly domain!: pulumi.Output<string | undefined>;
    /**
     * Using ICMP
     */
    public readonly icmp!: pulumi.Output<number | undefined>;
    /**
     * Specify Query Interval, unit: second, default is 1
     */
    public readonly interval!: pulumi.Output<number | undefined>;
    /**
     * Specify local port to send probe packet, default is 0 (no port)
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * Specify Retry Count, default is 3
     */
    public readonly retry!: pulumi.Output<number | undefined>;
    /**
     * Specify Sleep Time when query fail, unit: second, default is 3
     */
    public readonly sleep!: pulumi.Output<number | undefined>;
    /**
     * Specify Query Timeout, unit: msec, default is 3000
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * Specify Tracking Time, unit: second, default is 60
     */
    public readonly track!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbActiveRdt resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GslbActiveRdtArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbActiveRdtArgs | GslbActiveRdtState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbActiveRdtState | undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["icmp"] = state ? state.icmp : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["retry"] = state ? state.retry : undefined;
            resourceInputs["sleep"] = state ? state.sleep : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["track"] = state ? state.track : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbActiveRdtArgs | undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["icmp"] = args ? args.icmp : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["retry"] = args ? args.retry : undefined;
            resourceInputs["sleep"] = args ? args.sleep : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["track"] = args ? args.track : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbActiveRdt.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbActiveRdt resources.
 */
export interface GslbActiveRdtState {
    /**
     * Specify Query Domain (Specify Domain Name)
     */
    domain?: pulumi.Input<string>;
    /**
     * Using ICMP
     */
    icmp?: pulumi.Input<number>;
    /**
     * Specify Query Interval, unit: second, default is 1
     */
    interval?: pulumi.Input<number>;
    /**
     * Specify local port to send probe packet, default is 0 (no port)
     */
    port?: pulumi.Input<number>;
    /**
     * Specify Retry Count, default is 3
     */
    retry?: pulumi.Input<number>;
    /**
     * Specify Sleep Time when query fail, unit: second, default is 3
     */
    sleep?: pulumi.Input<number>;
    /**
     * Specify Query Timeout, unit: msec, default is 3000
     */
    timeout?: pulumi.Input<number>;
    /**
     * Specify Tracking Time, unit: second, default is 60
     */
    track?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbActiveRdt resource.
 */
export interface GslbActiveRdtArgs {
    /**
     * Specify Query Domain (Specify Domain Name)
     */
    domain?: pulumi.Input<string>;
    /**
     * Using ICMP
     */
    icmp?: pulumi.Input<number>;
    /**
     * Specify Query Interval, unit: second, default is 1
     */
    interval?: pulumi.Input<number>;
    /**
     * Specify local port to send probe packet, default is 0 (no port)
     */
    port?: pulumi.Input<number>;
    /**
     * Specify Retry Count, default is 3
     */
    retry?: pulumi.Input<number>;
    /**
     * Specify Sleep Time when query fail, unit: second, default is 3
     */
    sleep?: pulumi.Input<number>;
    /**
     * Specify Query Timeout, unit: msec, default is 3000
     */
    timeout?: pulumi.Input<number>;
    /**
     * Specify Tracking Time, unit: second, default is 60
     */
    track?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
