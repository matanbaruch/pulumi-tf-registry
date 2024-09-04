// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ScaleoutApps extends pulumi.CustomResource {
    /**
     * Get an existing ScaleoutApps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScaleoutAppsState, opts?: pulumi.CustomResourceOptions): ScaleoutApps {
        return new ScaleoutApps(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/scaleoutApps:ScaleoutApps';

    /**
     * Returns true if the given object is an instance of ScaleoutApps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScaleoutApps {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScaleoutApps.__pulumiType;
    }

    /**
     * Enable Scaleout for apps
     */
    public readonly enable!: pulumi.Output<number | undefined>;
    public readonly skipMacOverwrite!: pulumi.Output<outputs.ScaleoutAppsSkipMacOverwrite | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a ScaleoutApps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ScaleoutAppsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScaleoutAppsArgs | ScaleoutAppsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ScaleoutAppsState | undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["skipMacOverwrite"] = state ? state.skipMacOverwrite : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as ScaleoutAppsArgs | undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["skipMacOverwrite"] = args ? args.skipMacOverwrite : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ScaleoutApps.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ScaleoutApps resources.
 */
export interface ScaleoutAppsState {
    /**
     * Enable Scaleout for apps
     */
    enable?: pulumi.Input<number>;
    skipMacOverwrite?: pulumi.Input<inputs.ScaleoutAppsSkipMacOverwrite>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ScaleoutApps resource.
 */
export interface ScaleoutAppsArgs {
    /**
     * Enable Scaleout for apps
     */
    enable?: pulumi.Input<number>;
    skipMacOverwrite?: pulumi.Input<inputs.ScaleoutAppsSkipMacOverwrite>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
