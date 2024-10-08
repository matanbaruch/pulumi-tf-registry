// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LsnappsprofileLsnappsattributesBinding extends pulumi.CustomResource {
    /**
     * Get an existing LsnappsprofileLsnappsattributesBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LsnappsprofileLsnappsattributesBindingState, opts?: pulumi.CustomResourceOptions): LsnappsprofileLsnappsattributesBinding {
        return new LsnappsprofileLsnappsattributesBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/lsnappsprofileLsnappsattributesBinding:LsnappsprofileLsnappsattributesBinding';

    /**
     * Returns true if the given object is an instance of LsnappsprofileLsnappsattributesBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LsnappsprofileLsnappsattributesBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LsnappsprofileLsnappsattributesBinding.__pulumiType;
    }

    public readonly appsattributesname!: pulumi.Output<string>;
    public readonly appsprofilename!: pulumi.Output<string>;

    /**
     * Create a LsnappsprofileLsnappsattributesBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LsnappsprofileLsnappsattributesBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LsnappsprofileLsnappsattributesBindingArgs | LsnappsprofileLsnappsattributesBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LsnappsprofileLsnappsattributesBindingState | undefined;
            resourceInputs["appsattributesname"] = state ? state.appsattributesname : undefined;
            resourceInputs["appsprofilename"] = state ? state.appsprofilename : undefined;
        } else {
            const args = argsOrState as LsnappsprofileLsnappsattributesBindingArgs | undefined;
            if ((!args || args.appsattributesname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appsattributesname'");
            }
            if ((!args || args.appsprofilename === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appsprofilename'");
            }
            resourceInputs["appsattributesname"] = args ? args.appsattributesname : undefined;
            resourceInputs["appsprofilename"] = args ? args.appsprofilename : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LsnappsprofileLsnappsattributesBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LsnappsprofileLsnappsattributesBinding resources.
 */
export interface LsnappsprofileLsnappsattributesBindingState {
    appsattributesname?: pulumi.Input<string>;
    appsprofilename?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LsnappsprofileLsnappsattributesBinding resource.
 */
export interface LsnappsprofileLsnappsattributesBindingArgs {
    appsattributesname: pulumi.Input<string>;
    appsprofilename: pulumi.Input<string>;
}
