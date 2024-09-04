// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Filesystem extends pulumi.CustomResource {
    /**
     * Get an existing Filesystem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FilesystemState, opts?: pulumi.CustomResourceOptions): Filesystem {
        return new Filesystem(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesiscloud:index/filesystem:Filesystem';

    /**
     * Returns true if the given object is an instance of Filesystem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Filesystem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Filesystem.__pulumiType;
    }

    /**
     * The timestamp when this filesystem was created in RFC 3339.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The human-readable description for the filesystem. - Sets the default value "" if the attribute is not set.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The base path on the server under which the mount point can be accessed.
     */
    public /*out*/ readonly mountBasePath!: pulumi.Output<string>;
    /**
     * The start and end IP of the mount endpoint range. Expressed as a array with two entries.
     */
    public /*out*/ readonly mountEndpointRanges!: pulumi.Output<string[]>;
    /**
     * The human-readable name for the filesystem.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    /**
     * Flag to retain the filesystem when the resource is deleted - Sets the default value "false" if the attribute is not set.
     */
    public readonly retainOnDelete!: pulumi.Output<boolean>;
    /**
     * The storage size of this filesystem given in GiB. - The value must be at least 1.
     */
    public readonly size!: pulumi.Output<number>;
    /**
     * The filesystem status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FilesystemTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Filesystem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FilesystemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FilesystemArgs | FilesystemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FilesystemState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["mountBasePath"] = state ? state.mountBasePath : undefined;
            resourceInputs["mountEndpointRanges"] = state ? state.mountEndpointRanges : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["retainOnDelete"] = state ? state.retainOnDelete : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as FilesystemArgs | undefined;
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.size === undefined) && !opts.urn) {
                throw new Error("Missing required property 'size'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["retainOnDelete"] = args ? args.retainOnDelete : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["mountBasePath"] = undefined /*out*/;
            resourceInputs["mountEndpointRanges"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Filesystem.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Filesystem resources.
 */
export interface FilesystemState {
    /**
     * The timestamp when this filesystem was created in RFC 3339.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The human-readable description for the filesystem. - Sets the default value "" if the attribute is not set.
     */
    description?: pulumi.Input<string>;
    /**
     * The base path on the server under which the mount point can be accessed.
     */
    mountBasePath?: pulumi.Input<string>;
    /**
     * The start and end IP of the mount endpoint range. Expressed as a array with two entries.
     */
    mountEndpointRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The human-readable name for the filesystem.
     */
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    /**
     * Flag to retain the filesystem when the resource is deleted - Sets the default value "false" if the attribute is not set.
     */
    retainOnDelete?: pulumi.Input<boolean>;
    /**
     * The storage size of this filesystem given in GiB. - The value must be at least 1.
     */
    size?: pulumi.Input<number>;
    /**
     * The filesystem status.
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FilesystemTimeouts>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Filesystem resource.
 */
export interface FilesystemArgs {
    /**
     * The human-readable description for the filesystem. - Sets the default value "" if the attribute is not set.
     */
    description?: pulumi.Input<string>;
    /**
     * The human-readable name for the filesystem.
     */
    name?: pulumi.Input<string>;
    region: pulumi.Input<string>;
    /**
     * Flag to retain the filesystem when the resource is deleted - Sets the default value "false" if the attribute is not set.
     */
    retainOnDelete?: pulumi.Input<boolean>;
    /**
     * The storage size of this filesystem given in GiB. - The value must be at least 1.
     */
    size: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.FilesystemTimeouts>;
    type: pulumi.Input<string>;
}
