// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Archive extends pulumi.CustomResource {
    /**
     * Get an existing Archive resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ArchiveState, opts?: pulumi.CustomResourceOptions): Archive {
        return new Archive(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sakuracloud:index/archive:Archive';

    /**
     * Returns true if the given object is an instance of Archive.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Archive {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Archive.__pulumiType;
    }

    /**
     * The file path to upload to the SakuraCloud
     */
    public readonly archiveFile!: pulumi.Output<string | undefined>;
    /**
     * The description of the archive. The length of this value must be in the range [`1`-`512`]
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The md5 checksum calculated from the base64 encoded file body
     */
    public readonly hash!: pulumi.Output<string>;
    /**
     * The icon id to attach to the archive
     */
    public readonly iconId!: pulumi.Output<string | undefined>;
    /**
     * The name of the archive. The length of this value must be in the range [`1`-`64`]
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The size of archive in GiB. This must be one of [`20`/`40`/`60`/`80`/`100`/`250`/`500`/`750`/`1024`]
     */
    public readonly size!: pulumi.Output<number>;
    /**
     * The id of the source archive. This conflicts with [`source_disk_id`]
     */
    public readonly sourceArchiveId!: pulumi.Output<string | undefined>;
    /**
     * The share key of source shared archive
     */
    public readonly sourceArchiveZone!: pulumi.Output<string | undefined>;
    /**
     * The id of the source disk. This conflicts with [`source_archive_id`]
     */
    public readonly sourceDiskId!: pulumi.Output<string | undefined>;
    /**
     * The share key of source shared archive
     */
    public readonly sourceSharedKey!: pulumi.Output<string | undefined>;
    /**
     * Any tags to assign to the archive
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ArchiveTimeouts | undefined>;
    /**
     * The name of zone that the archive will be created (e.g. `is1a`, `tk1a`)
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a Archive resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ArchiveArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ArchiveArgs | ArchiveState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ArchiveState | undefined;
            resourceInputs["archiveFile"] = state ? state.archiveFile : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["hash"] = state ? state.hash : undefined;
            resourceInputs["iconId"] = state ? state.iconId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["sourceArchiveId"] = state ? state.sourceArchiveId : undefined;
            resourceInputs["sourceArchiveZone"] = state ? state.sourceArchiveZone : undefined;
            resourceInputs["sourceDiskId"] = state ? state.sourceDiskId : undefined;
            resourceInputs["sourceSharedKey"] = state ? state.sourceSharedKey : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as ArchiveArgs | undefined;
            resourceInputs["archiveFile"] = args ? args.archiveFile : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["hash"] = args ? args.hash : undefined;
            resourceInputs["iconId"] = args ? args.iconId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["sourceArchiveId"] = args ? args.sourceArchiveId : undefined;
            resourceInputs["sourceArchiveZone"] = args ? args.sourceArchiveZone : undefined;
            resourceInputs["sourceDiskId"] = args ? args.sourceDiskId : undefined;
            resourceInputs["sourceSharedKey"] = args?.sourceSharedKey ? pulumi.secret(args.sourceSharedKey) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["sourceSharedKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Archive.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Archive resources.
 */
export interface ArchiveState {
    /**
     * The file path to upload to the SakuraCloud
     */
    archiveFile?: pulumi.Input<string>;
    /**
     * The description of the archive. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The md5 checksum calculated from the base64 encoded file body
     */
    hash?: pulumi.Input<string>;
    /**
     * The icon id to attach to the archive
     */
    iconId?: pulumi.Input<string>;
    /**
     * The name of the archive. The length of this value must be in the range [`1`-`64`]
     */
    name?: pulumi.Input<string>;
    /**
     * The size of archive in GiB. This must be one of [`20`/`40`/`60`/`80`/`100`/`250`/`500`/`750`/`1024`]
     */
    size?: pulumi.Input<number>;
    /**
     * The id of the source archive. This conflicts with [`source_disk_id`]
     */
    sourceArchiveId?: pulumi.Input<string>;
    /**
     * The share key of source shared archive
     */
    sourceArchiveZone?: pulumi.Input<string>;
    /**
     * The id of the source disk. This conflicts with [`source_archive_id`]
     */
    sourceDiskId?: pulumi.Input<string>;
    /**
     * The share key of source shared archive
     */
    sourceSharedKey?: pulumi.Input<string>;
    /**
     * Any tags to assign to the archive
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ArchiveTimeouts>;
    /**
     * The name of zone that the archive will be created (e.g. `is1a`, `tk1a`)
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Archive resource.
 */
export interface ArchiveArgs {
    /**
     * The file path to upload to the SakuraCloud
     */
    archiveFile?: pulumi.Input<string>;
    /**
     * The description of the archive. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The md5 checksum calculated from the base64 encoded file body
     */
    hash?: pulumi.Input<string>;
    /**
     * The icon id to attach to the archive
     */
    iconId?: pulumi.Input<string>;
    /**
     * The name of the archive. The length of this value must be in the range [`1`-`64`]
     */
    name?: pulumi.Input<string>;
    /**
     * The size of archive in GiB. This must be one of [`20`/`40`/`60`/`80`/`100`/`250`/`500`/`750`/`1024`]
     */
    size?: pulumi.Input<number>;
    /**
     * The id of the source archive. This conflicts with [`source_disk_id`]
     */
    sourceArchiveId?: pulumi.Input<string>;
    /**
     * The share key of source shared archive
     */
    sourceArchiveZone?: pulumi.Input<string>;
    /**
     * The id of the source disk. This conflicts with [`source_archive_id`]
     */
    sourceDiskId?: pulumi.Input<string>;
    /**
     * The share key of source shared archive
     */
    sourceSharedKey?: pulumi.Input<string>;
    /**
     * Any tags to assign to the archive
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ArchiveTimeouts>;
    /**
     * The name of zone that the archive will be created (e.g. `is1a`, `tk1a`)
     */
    zone?: pulumi.Input<string>;
}
