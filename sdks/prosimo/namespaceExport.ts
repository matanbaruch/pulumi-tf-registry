// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NamespaceExport extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceExport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamespaceExportState, opts?: pulumi.CustomResourceOptions): NamespaceExport {
        return new NamespaceExport(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prosimo:index/namespaceExport:NamespaceExport';

    /**
     * Returns true if the given object is an instance of NamespaceExport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceExport {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceExport.__pulumiType;
    }

    /**
     * Export local networks to other namespace
     */
    public readonly exports!: pulumi.Output<outputs.NamespaceExportExport[] | undefined>;
    /**
     * Name of the namespace
     */
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NamespaceExportTimeouts | undefined>;
    /**
     * Wait for the rollout of the task to complete. Defaults to true.
     */
    public readonly waitForRollout!: pulumi.Output<boolean | undefined>;

    /**
     * Create a NamespaceExport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NamespaceExportArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamespaceExportArgs | NamespaceExportState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NamespaceExportState | undefined;
            resourceInputs["exports"] = state ? state.exports : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["waitForRollout"] = state ? state.waitForRollout : undefined;
        } else {
            const args = argsOrState as NamespaceExportArgs | undefined;
            resourceInputs["exports"] = args ? args.exports : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["waitForRollout"] = args ? args.waitForRollout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NamespaceExport.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NamespaceExport resources.
 */
export interface NamespaceExportState {
    /**
     * Export local networks to other namespace
     */
    exports?: pulumi.Input<pulumi.Input<inputs.NamespaceExportExport>[]>;
    /**
     * Name of the namespace
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NamespaceExportTimeouts>;
    /**
     * Wait for the rollout of the task to complete. Defaults to true.
     */
    waitForRollout?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a NamespaceExport resource.
 */
export interface NamespaceExportArgs {
    /**
     * Export local networks to other namespace
     */
    exports?: pulumi.Input<pulumi.Input<inputs.NamespaceExportExport>[]>;
    /**
     * Name of the namespace
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NamespaceExportTimeouts>;
    /**
     * Wait for the rollout of the task to complete. Defaults to true.
     */
    waitForRollout?: pulumi.Input<boolean>;
}
