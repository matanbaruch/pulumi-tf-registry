// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FmupdateAvipsAdvancedlog extends pulumi.CustomResource {
    /**
     * Get an existing FmupdateAvipsAdvancedlog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FmupdateAvipsAdvancedlogState, opts?: pulumi.CustomResourceOptions): FmupdateAvipsAdvancedlog {
        return new FmupdateAvipsAdvancedlog(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortianalyzer:index/fmupdateAvipsAdvancedlog:FmupdateAvipsAdvancedlog';

    /**
     * Returns true if the given object is an instance of FmupdateAvipsAdvancedlog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FmupdateAvipsAdvancedlog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FmupdateAvipsAdvancedlog.__pulumiType;
    }

    public readonly logFortigate!: pulumi.Output<string>;
    public readonly logServer!: pulumi.Output<string>;

    /**
     * Create a FmupdateAvipsAdvancedlog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FmupdateAvipsAdvancedlogArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FmupdateAvipsAdvancedlogArgs | FmupdateAvipsAdvancedlogState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FmupdateAvipsAdvancedlogState | undefined;
            resourceInputs["logFortigate"] = state ? state.logFortigate : undefined;
            resourceInputs["logServer"] = state ? state.logServer : undefined;
        } else {
            const args = argsOrState as FmupdateAvipsAdvancedlogArgs | undefined;
            resourceInputs["logFortigate"] = args ? args.logFortigate : undefined;
            resourceInputs["logServer"] = args ? args.logServer : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FmupdateAvipsAdvancedlog.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FmupdateAvipsAdvancedlog resources.
 */
export interface FmupdateAvipsAdvancedlogState {
    logFortigate?: pulumi.Input<string>;
    logServer?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FmupdateAvipsAdvancedlog resource.
 */
export interface FmupdateAvipsAdvancedlogArgs {
    logFortigate?: pulumi.Input<string>;
    logServer?: pulumi.Input<string>;
}
