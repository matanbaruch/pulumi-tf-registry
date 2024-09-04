// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FmupdateFdssettingPushoverridetoclient extends pulumi.CustomResource {
    /**
     * Get an existing FmupdateFdssettingPushoverridetoclient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FmupdateFdssettingPushoverridetoclientState, opts?: pulumi.CustomResourceOptions): FmupdateFdssettingPushoverridetoclient {
        return new FmupdateFdssettingPushoverridetoclient(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortianalyzer:index/fmupdateFdssettingPushoverridetoclient:FmupdateFdssettingPushoverridetoclient';

    /**
     * Returns true if the given object is an instance of FmupdateFdssettingPushoverridetoclient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FmupdateFdssettingPushoverridetoclient {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FmupdateFdssettingPushoverridetoclient.__pulumiType;
    }

    public readonly announceIps!: pulumi.Output<outputs.FmupdateFdssettingPushoverridetoclientAnnounceIp[] | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a FmupdateFdssettingPushoverridetoclient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FmupdateFdssettingPushoverridetoclientArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FmupdateFdssettingPushoverridetoclientArgs | FmupdateFdssettingPushoverridetoclientState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FmupdateFdssettingPushoverridetoclientState | undefined;
            resourceInputs["announceIps"] = state ? state.announceIps : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as FmupdateFdssettingPushoverridetoclientArgs | undefined;
            resourceInputs["announceIps"] = args ? args.announceIps : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FmupdateFdssettingPushoverridetoclient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FmupdateFdssettingPushoverridetoclient resources.
 */
export interface FmupdateFdssettingPushoverridetoclientState {
    announceIps?: pulumi.Input<pulumi.Input<inputs.FmupdateFdssettingPushoverridetoclientAnnounceIp>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FmupdateFdssettingPushoverridetoclient resource.
 */
export interface FmupdateFdssettingPushoverridetoclientArgs {
    announceIps?: pulumi.Input<pulumi.Input<inputs.FmupdateFdssettingPushoverridetoclientAnnounceIp>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
