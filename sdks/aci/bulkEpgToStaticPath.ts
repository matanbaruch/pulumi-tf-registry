// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BulkEpgToStaticPath extends pulumi.CustomResource {
    /**
     * Get an existing BulkEpgToStaticPath resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BulkEpgToStaticPathState, opts?: pulumi.CustomResourceOptions): BulkEpgToStaticPath {
        return new BulkEpgToStaticPath(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/bulkEpgToStaticPath:BulkEpgToStaticPath';

    /**
     * Returns true if the given object is an instance of BulkEpgToStaticPath.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BulkEpgToStaticPath {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BulkEpgToStaticPath.__pulumiType;
    }

    public readonly applicationEpgDn!: pulumi.Output<string>;
    public readonly staticPaths!: pulumi.Output<outputs.BulkEpgToStaticPathStaticPath[]>;

    /**
     * Create a BulkEpgToStaticPath resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BulkEpgToStaticPathArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BulkEpgToStaticPathArgs | BulkEpgToStaticPathState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BulkEpgToStaticPathState | undefined;
            resourceInputs["applicationEpgDn"] = state ? state.applicationEpgDn : undefined;
            resourceInputs["staticPaths"] = state ? state.staticPaths : undefined;
        } else {
            const args = argsOrState as BulkEpgToStaticPathArgs | undefined;
            if ((!args || args.applicationEpgDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationEpgDn'");
            }
            if ((!args || args.staticPaths === undefined) && !opts.urn) {
                throw new Error("Missing required property 'staticPaths'");
            }
            resourceInputs["applicationEpgDn"] = args ? args.applicationEpgDn : undefined;
            resourceInputs["staticPaths"] = args ? args.staticPaths : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BulkEpgToStaticPath.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BulkEpgToStaticPath resources.
 */
export interface BulkEpgToStaticPathState {
    applicationEpgDn?: pulumi.Input<string>;
    staticPaths?: pulumi.Input<pulumi.Input<inputs.BulkEpgToStaticPathStaticPath>[]>;
}

/**
 * The set of arguments for constructing a BulkEpgToStaticPath resource.
 */
export interface BulkEpgToStaticPathArgs {
    applicationEpgDn: pulumi.Input<string>;
    staticPaths: pulumi.Input<pulumi.Input<inputs.BulkEpgToStaticPathStaticPath>[]>;
}
