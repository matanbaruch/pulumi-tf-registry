// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Logfortianalyzer3Filter extends pulumi.CustomResource {
    /**
     * Get an existing Logfortianalyzer3Filter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Logfortianalyzer3FilterState, opts?: pulumi.CustomResourceOptions): Logfortianalyzer3Filter {
        return new Logfortianalyzer3Filter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/logfortianalyzer3Filter:Logfortianalyzer3Filter';

    /**
     * Returns true if the given object is an instance of Logfortianalyzer3Filter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Logfortianalyzer3Filter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Logfortianalyzer3Filter.__pulumiType;
    }

    public readonly override!: pulumi.Output<string>;
    public readonly severity!: pulumi.Output<string>;

    /**
     * Create a Logfortianalyzer3Filter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Logfortianalyzer3FilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Logfortianalyzer3FilterArgs | Logfortianalyzer3FilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Logfortianalyzer3FilterState | undefined;
            resourceInputs["override"] = state ? state.override : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
        } else {
            const args = argsOrState as Logfortianalyzer3FilterArgs | undefined;
            resourceInputs["override"] = args ? args.override : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Logfortianalyzer3Filter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Logfortianalyzer3Filter resources.
 */
export interface Logfortianalyzer3FilterState {
    override?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Logfortianalyzer3Filter resource.
 */
export interface Logfortianalyzer3FilterArgs {
    override?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
}
