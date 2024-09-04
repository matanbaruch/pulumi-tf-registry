// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ThreatIntelWebrootGlobal extends pulumi.CustomResource {
    /**
     * Get an existing ThreatIntelWebrootGlobal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ThreatIntelWebrootGlobalState, opts?: pulumi.CustomResourceOptions): ThreatIntelWebrootGlobal {
        return new ThreatIntelWebrootGlobal(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/threatIntelWebrootGlobal:ThreatIntelWebrootGlobal';

    /**
     * Returns true if the given object is an instance of ThreatIntelWebrootGlobal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ThreatIntelWebrootGlobal {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ThreatIntelWebrootGlobal.__pulumiType;
    }

    public readonly samplingEnables!: pulumi.Output<outputs.ThreatIntelWebrootGlobalSamplingEnable[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a ThreatIntelWebrootGlobal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ThreatIntelWebrootGlobalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ThreatIntelWebrootGlobalArgs | ThreatIntelWebrootGlobalState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ThreatIntelWebrootGlobalState | undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as ThreatIntelWebrootGlobalArgs | undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ThreatIntelWebrootGlobal.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ThreatIntelWebrootGlobal resources.
 */
export interface ThreatIntelWebrootGlobalState {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.ThreatIntelWebrootGlobalSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ThreatIntelWebrootGlobal resource.
 */
export interface ThreatIntelWebrootGlobalArgs {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.ThreatIntelWebrootGlobalSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
