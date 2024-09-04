// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class File extends pulumi.CustomResource {
    /**
     * Get an existing File resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FileState, opts?: pulumi.CustomResourceOptions): File {
        return new File(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vsphere:index/file:File';

    /**
     * Returns true if the given object is an instance of File.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is File {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === File.__pulumiType;
    }

    public readonly createDirectories!: pulumi.Output<boolean | undefined>;
    public readonly datacenter!: pulumi.Output<string | undefined>;
    public readonly datastore!: pulumi.Output<string>;
    public readonly destinationFile!: pulumi.Output<string>;
    public readonly sourceDatacenter!: pulumi.Output<string | undefined>;
    public readonly sourceDatastore!: pulumi.Output<string | undefined>;
    public readonly sourceFile!: pulumi.Output<string>;

    /**
     * Create a File resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FileArgs | FileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FileState | undefined;
            resourceInputs["createDirectories"] = state ? state.createDirectories : undefined;
            resourceInputs["datacenter"] = state ? state.datacenter : undefined;
            resourceInputs["datastore"] = state ? state.datastore : undefined;
            resourceInputs["destinationFile"] = state ? state.destinationFile : undefined;
            resourceInputs["sourceDatacenter"] = state ? state.sourceDatacenter : undefined;
            resourceInputs["sourceDatastore"] = state ? state.sourceDatastore : undefined;
            resourceInputs["sourceFile"] = state ? state.sourceFile : undefined;
        } else {
            const args = argsOrState as FileArgs | undefined;
            if ((!args || args.datastore === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datastore'");
            }
            if ((!args || args.destinationFile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationFile'");
            }
            if ((!args || args.sourceFile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceFile'");
            }
            resourceInputs["createDirectories"] = args ? args.createDirectories : undefined;
            resourceInputs["datacenter"] = args ? args.datacenter : undefined;
            resourceInputs["datastore"] = args ? args.datastore : undefined;
            resourceInputs["destinationFile"] = args ? args.destinationFile : undefined;
            resourceInputs["sourceDatacenter"] = args ? args.sourceDatacenter : undefined;
            resourceInputs["sourceDatastore"] = args ? args.sourceDatastore : undefined;
            resourceInputs["sourceFile"] = args ? args.sourceFile : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(File.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering File resources.
 */
export interface FileState {
    createDirectories?: pulumi.Input<boolean>;
    datacenter?: pulumi.Input<string>;
    datastore?: pulumi.Input<string>;
    destinationFile?: pulumi.Input<string>;
    sourceDatacenter?: pulumi.Input<string>;
    sourceDatastore?: pulumi.Input<string>;
    sourceFile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a File resource.
 */
export interface FileArgs {
    createDirectories?: pulumi.Input<boolean>;
    datacenter?: pulumi.Input<string>;
    datastore: pulumi.Input<string>;
    destinationFile: pulumi.Input<string>;
    sourceDatacenter?: pulumi.Input<string>;
    sourceDatastore?: pulumi.Input<string>;
    sourceFile: pulumi.Input<string>;
}
