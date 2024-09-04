// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ZoneLockdown extends pulumi.CustomResource {
    /**
     * Get an existing ZoneLockdown resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneLockdownState, opts?: pulumi.CustomResourceOptions): ZoneLockdown {
        return new ZoneLockdown(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/zoneLockdown:ZoneLockdown';

    /**
     * Returns true if the given object is an instance of ZoneLockdown.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZoneLockdown {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZoneLockdown.__pulumiType;
    }

    /**
     * A list of IP addresses or IP ranges to match the request against specified in target, value pairs.
     */
    public readonly configurations!: pulumi.Output<outputs.ZoneLockdownConfiguration[]>;
    /**
     * A description about the lockdown entry. Typically used as a reminder or explanation for the lockdown.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Boolean of whether this zone lockdown is currently paused. Defaults to `false`.
     */
    public readonly paused!: pulumi.Output<boolean | undefined>;
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * A list of simple wildcard patterns to match requests against. The order of the urls is unimportant.
     */
    public readonly urls!: pulumi.Output<string[]>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a ZoneLockdown resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneLockdownArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZoneLockdownArgs | ZoneLockdownState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ZoneLockdownState | undefined;
            resourceInputs["configurations"] = state ? state.configurations : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["paused"] = state ? state.paused : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["urls"] = state ? state.urls : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as ZoneLockdownArgs | undefined;
            if ((!args || args.configurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurations'");
            }
            if ((!args || args.urls === undefined) && !opts.urn) {
                throw new Error("Missing required property 'urls'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["configurations"] = args ? args.configurations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["paused"] = args ? args.paused : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["urls"] = args ? args.urls : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ZoneLockdown.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ZoneLockdown resources.
 */
export interface ZoneLockdownState {
    /**
     * A list of IP addresses or IP ranges to match the request against specified in target, value pairs.
     */
    configurations?: pulumi.Input<pulumi.Input<inputs.ZoneLockdownConfiguration>[]>;
    /**
     * A description about the lockdown entry. Typically used as a reminder or explanation for the lockdown.
     */
    description?: pulumi.Input<string>;
    /**
     * Boolean of whether this zone lockdown is currently paused. Defaults to `false`.
     */
    paused?: pulumi.Input<boolean>;
    priority?: pulumi.Input<number>;
    /**
     * A list of simple wildcard patterns to match requests against. The order of the urls is unimportant.
     */
    urls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZoneLockdown resource.
 */
export interface ZoneLockdownArgs {
    /**
     * A list of IP addresses or IP ranges to match the request against specified in target, value pairs.
     */
    configurations: pulumi.Input<pulumi.Input<inputs.ZoneLockdownConfiguration>[]>;
    /**
     * A description about the lockdown entry. Typically used as a reminder or explanation for the lockdown.
     */
    description?: pulumi.Input<string>;
    /**
     * Boolean of whether this zone lockdown is currently paused. Defaults to `false`.
     */
    paused?: pulumi.Input<boolean>;
    priority?: pulumi.Input<number>;
    /**
     * A list of simple wildcard patterns to match requests against. The order of the urls is unimportant.
     */
    urls: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId: pulumi.Input<string>;
}
