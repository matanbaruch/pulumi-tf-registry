// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectDlpFilepatternEntries extends pulumi.CustomResource {
    /**
     * Get an existing ObjectDlpFilepatternEntries resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectDlpFilepatternEntriesState, opts?: pulumi.CustomResourceOptions): ObjectDlpFilepatternEntries {
        return new ObjectDlpFilepatternEntries(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectDlpFilepatternEntries:ObjectDlpFilepatternEntries';

    /**
     * Returns true if the given object is an instance of ObjectDlpFilepatternEntries.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectDlpFilepatternEntries {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectDlpFilepatternEntries.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly fileType!: pulumi.Output<string | undefined>;
    public readonly filepattern!: pulumi.Output<string>;
    public readonly filterType!: pulumi.Output<string | undefined>;
    public readonly pattern!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectDlpFilepatternEntries resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectDlpFilepatternEntriesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectDlpFilepatternEntriesArgs | ObjectDlpFilepatternEntriesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectDlpFilepatternEntriesState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["fileType"] = state ? state.fileType : undefined;
            resourceInputs["filepattern"] = state ? state.filepattern : undefined;
            resourceInputs["filterType"] = state ? state.filterType : undefined;
            resourceInputs["pattern"] = state ? state.pattern : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectDlpFilepatternEntriesArgs | undefined;
            if ((!args || args.filepattern === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filepattern'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["fileType"] = args ? args.fileType : undefined;
            resourceInputs["filepattern"] = args ? args.filepattern : undefined;
            resourceInputs["filterType"] = args ? args.filterType : undefined;
            resourceInputs["pattern"] = args ? args.pattern : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectDlpFilepatternEntries.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectDlpFilepatternEntries resources.
 */
export interface ObjectDlpFilepatternEntriesState {
    adom?: pulumi.Input<string>;
    fileType?: pulumi.Input<string>;
    filepattern?: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    pattern?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectDlpFilepatternEntries resource.
 */
export interface ObjectDlpFilepatternEntriesArgs {
    adom?: pulumi.Input<string>;
    fileType?: pulumi.Input<string>;
    filepattern: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    pattern?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
