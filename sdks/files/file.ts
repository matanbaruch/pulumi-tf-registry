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
    public static readonly __pulumiType = 'files:index/file:File';

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

    /**
     * File CRC32 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.
     */
    public /*out*/ readonly crc32!: pulumi.Output<string>;
    /**
     * File created date/time
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * ID of the API key that created the file/folder
     */
    public /*out*/ readonly createdByApiKeyId!: pulumi.Output<number>;
    /**
     * ID of the AS2 Incoming Message that created the file/folder
     */
    public /*out*/ readonly createdByAs2IncomingMessageId!: pulumi.Output<number>;
    /**
     * ID of the Automation that created the file/folder
     */
    public /*out*/ readonly createdByAutomationId!: pulumi.Output<number>;
    /**
     * ID of the Bundle Registration that created the file/folder
     */
    public /*out*/ readonly createdByBundleRegistrationId!: pulumi.Output<number>;
    /**
     * User ID of the User who created the file/folder
     */
    public /*out*/ readonly createdById!: pulumi.Output<number>;
    /**
     * ID of the Inbox that created the file/folder
     */
    public /*out*/ readonly createdByInboxId!: pulumi.Output<number>;
    /**
     * ID of the Remote Server that created the file/folder
     */
    public /*out*/ readonly createdByRemoteServerId!: pulumi.Output<number>;
    /**
     * ID of the Remote Server Sync that created the file/folder
     */
    public /*out*/ readonly createdByRemoteServerSyncId!: pulumi.Output<number>;
    /**
     * Custom metadata map of keys and values. Limited to 32 keys, 256 characters per key and 1024 characters per value.
     */
    public readonly customMetadata!: pulumi.Output<any>;
    /**
     * File/Folder display name
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * Link to download file. Provided only in response to a download request.
     */
    public /*out*/ readonly downloadUri!: pulumi.Output<string>;
    /**
     * Is this folder locked and unable to be modified?
     */
    public /*out*/ readonly isLocked!: pulumi.Output<boolean>;
    /**
     * ID of the API key that last modified the file/folder
     */
    public /*out*/ readonly lastModifiedByApiKeyId!: pulumi.Output<number>;
    /**
     * ID of the Automation that last modified the file/folder
     */
    public /*out*/ readonly lastModifiedByAutomationId!: pulumi.Output<number>;
    /**
     * ID of the Bundle Registration that last modified the file/folder
     */
    public /*out*/ readonly lastModifiedByBundleRegistrationId!: pulumi.Output<number>;
    /**
     * User ID of the User who last modified the file/folder
     */
    public /*out*/ readonly lastModifiedById!: pulumi.Output<number>;
    /**
     * ID of the Remote Server that last modified the file/folder
     */
    public /*out*/ readonly lastModifiedByRemoteServerId!: pulumi.Output<number>;
    /**
     * ID of the Remote Server Sync that last modified the file/folder
     */
    public /*out*/ readonly lastModifiedByRemoteServerSyncId!: pulumi.Output<number>;
    /**
     * File MD5 checksum.
     */
    public readonly md5!: pulumi.Output<string>;
    /**
     * MIME Type. This is determined by the filename extension and is not stored separately internally.
     */
    public /*out*/ readonly mimeType!: pulumi.Output<string>;
    /**
     * File last modified date/time, according to the server. This is the timestamp of the last Files.com operation of the
     * file, regardless of what modified timestamp was sent.
     */
    public /*out*/ readonly mtime!: pulumi.Output<string>;
    /**
     * File/Folder path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000
     * characters.
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * A short string representing the current user's permissions. Can be `r` (Read),`w` (Write),`d` (Delete), `l` (List) or
     * any combination
     */
    public /*out*/ readonly permissions!: pulumi.Output<string>;
    /**
     * File preview
     */
    public /*out*/ readonly preview!: pulumi.Output<string>;
    /**
     * File preview ID
     */
    public /*out*/ readonly previewId!: pulumi.Output<number>;
    /**
     * Bookmark/priority color of file/folder
     */
    public readonly priorityColor!: pulumi.Output<string>;
    /**
     * File last modified date/time, according to the client who set it. Files.com allows desktop, FTP, SFTP, and WebDAV
     * clients to set modified at times. This allows Desktop<->Cloud syncing to preserve modified at times.
     */
    public readonly providedMtime!: pulumi.Output<string>;
    /**
     * Region location
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * File/Folder size
     */
    public readonly size!: pulumi.Output<number>;
    /**
     * Path to a file that will be read and uploaded.
     */
    public readonly source!: pulumi.Output<string>;
    /**
     * Are subfolders locked and unable to be modified?
     */
    public /*out*/ readonly subfoldersLocked!: pulumi.Output<boolean>;
    /**
     * Type: `directory` or `file`.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            resourceInputs["crc32"] = state ? state.crc32 : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdByApiKeyId"] = state ? state.createdByApiKeyId : undefined;
            resourceInputs["createdByAs2IncomingMessageId"] = state ? state.createdByAs2IncomingMessageId : undefined;
            resourceInputs["createdByAutomationId"] = state ? state.createdByAutomationId : undefined;
            resourceInputs["createdByBundleRegistrationId"] = state ? state.createdByBundleRegistrationId : undefined;
            resourceInputs["createdById"] = state ? state.createdById : undefined;
            resourceInputs["createdByInboxId"] = state ? state.createdByInboxId : undefined;
            resourceInputs["createdByRemoteServerId"] = state ? state.createdByRemoteServerId : undefined;
            resourceInputs["createdByRemoteServerSyncId"] = state ? state.createdByRemoteServerSyncId : undefined;
            resourceInputs["customMetadata"] = state ? state.customMetadata : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["downloadUri"] = state ? state.downloadUri : undefined;
            resourceInputs["isLocked"] = state ? state.isLocked : undefined;
            resourceInputs["lastModifiedByApiKeyId"] = state ? state.lastModifiedByApiKeyId : undefined;
            resourceInputs["lastModifiedByAutomationId"] = state ? state.lastModifiedByAutomationId : undefined;
            resourceInputs["lastModifiedByBundleRegistrationId"] = state ? state.lastModifiedByBundleRegistrationId : undefined;
            resourceInputs["lastModifiedById"] = state ? state.lastModifiedById : undefined;
            resourceInputs["lastModifiedByRemoteServerId"] = state ? state.lastModifiedByRemoteServerId : undefined;
            resourceInputs["lastModifiedByRemoteServerSyncId"] = state ? state.lastModifiedByRemoteServerSyncId : undefined;
            resourceInputs["md5"] = state ? state.md5 : undefined;
            resourceInputs["mimeType"] = state ? state.mimeType : undefined;
            resourceInputs["mtime"] = state ? state.mtime : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["preview"] = state ? state.preview : undefined;
            resourceInputs["previewId"] = state ? state.previewId : undefined;
            resourceInputs["priorityColor"] = state ? state.priorityColor : undefined;
            resourceInputs["providedMtime"] = state ? state.providedMtime : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["subfoldersLocked"] = state ? state.subfoldersLocked : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as FileArgs | undefined;
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["customMetadata"] = args ? args.customMetadata : undefined;
            resourceInputs["md5"] = args ? args.md5 : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["priorityColor"] = args ? args.priorityColor : undefined;
            resourceInputs["providedMtime"] = args ? args.providedMtime : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["crc32"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdByApiKeyId"] = undefined /*out*/;
            resourceInputs["createdByAs2IncomingMessageId"] = undefined /*out*/;
            resourceInputs["createdByAutomationId"] = undefined /*out*/;
            resourceInputs["createdByBundleRegistrationId"] = undefined /*out*/;
            resourceInputs["createdById"] = undefined /*out*/;
            resourceInputs["createdByInboxId"] = undefined /*out*/;
            resourceInputs["createdByRemoteServerId"] = undefined /*out*/;
            resourceInputs["createdByRemoteServerSyncId"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["downloadUri"] = undefined /*out*/;
            resourceInputs["isLocked"] = undefined /*out*/;
            resourceInputs["lastModifiedByApiKeyId"] = undefined /*out*/;
            resourceInputs["lastModifiedByAutomationId"] = undefined /*out*/;
            resourceInputs["lastModifiedByBundleRegistrationId"] = undefined /*out*/;
            resourceInputs["lastModifiedById"] = undefined /*out*/;
            resourceInputs["lastModifiedByRemoteServerId"] = undefined /*out*/;
            resourceInputs["lastModifiedByRemoteServerSyncId"] = undefined /*out*/;
            resourceInputs["mimeType"] = undefined /*out*/;
            resourceInputs["mtime"] = undefined /*out*/;
            resourceInputs["permissions"] = undefined /*out*/;
            resourceInputs["preview"] = undefined /*out*/;
            resourceInputs["previewId"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["subfoldersLocked"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(File.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering File resources.
 */
export interface FileState {
    /**
     * File CRC32 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.
     */
    crc32?: pulumi.Input<string>;
    /**
     * File created date/time
     */
    createdAt?: pulumi.Input<string>;
    /**
     * ID of the API key that created the file/folder
     */
    createdByApiKeyId?: pulumi.Input<number>;
    /**
     * ID of the AS2 Incoming Message that created the file/folder
     */
    createdByAs2IncomingMessageId?: pulumi.Input<number>;
    /**
     * ID of the Automation that created the file/folder
     */
    createdByAutomationId?: pulumi.Input<number>;
    /**
     * ID of the Bundle Registration that created the file/folder
     */
    createdByBundleRegistrationId?: pulumi.Input<number>;
    /**
     * User ID of the User who created the file/folder
     */
    createdById?: pulumi.Input<number>;
    /**
     * ID of the Inbox that created the file/folder
     */
    createdByInboxId?: pulumi.Input<number>;
    /**
     * ID of the Remote Server that created the file/folder
     */
    createdByRemoteServerId?: pulumi.Input<number>;
    /**
     * ID of the Remote Server Sync that created the file/folder
     */
    createdByRemoteServerSyncId?: pulumi.Input<number>;
    /**
     * Custom metadata map of keys and values. Limited to 32 keys, 256 characters per key and 1024 characters per value.
     */
    customMetadata?: any;
    /**
     * File/Folder display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Link to download file. Provided only in response to a download request.
     */
    downloadUri?: pulumi.Input<string>;
    /**
     * Is this folder locked and unable to be modified?
     */
    isLocked?: pulumi.Input<boolean>;
    /**
     * ID of the API key that last modified the file/folder
     */
    lastModifiedByApiKeyId?: pulumi.Input<number>;
    /**
     * ID of the Automation that last modified the file/folder
     */
    lastModifiedByAutomationId?: pulumi.Input<number>;
    /**
     * ID of the Bundle Registration that last modified the file/folder
     */
    lastModifiedByBundleRegistrationId?: pulumi.Input<number>;
    /**
     * User ID of the User who last modified the file/folder
     */
    lastModifiedById?: pulumi.Input<number>;
    /**
     * ID of the Remote Server that last modified the file/folder
     */
    lastModifiedByRemoteServerId?: pulumi.Input<number>;
    /**
     * ID of the Remote Server Sync that last modified the file/folder
     */
    lastModifiedByRemoteServerSyncId?: pulumi.Input<number>;
    /**
     * File MD5 checksum.
     */
    md5?: pulumi.Input<string>;
    /**
     * MIME Type. This is determined by the filename extension and is not stored separately internally.
     */
    mimeType?: pulumi.Input<string>;
    /**
     * File last modified date/time, according to the server. This is the timestamp of the last Files.com operation of the
     * file, regardless of what modified timestamp was sent.
     */
    mtime?: pulumi.Input<string>;
    /**
     * File/Folder path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000
     * characters.
     */
    path?: pulumi.Input<string>;
    /**
     * A short string representing the current user's permissions. Can be `r` (Read),`w` (Write),`d` (Delete), `l` (List) or
     * any combination
     */
    permissions?: pulumi.Input<string>;
    /**
     * File preview
     */
    preview?: pulumi.Input<string>;
    /**
     * File preview ID
     */
    previewId?: pulumi.Input<number>;
    /**
     * Bookmark/priority color of file/folder
     */
    priorityColor?: pulumi.Input<string>;
    /**
     * File last modified date/time, according to the client who set it. Files.com allows desktop, FTP, SFTP, and WebDAV
     * clients to set modified at times. This allows Desktop<->Cloud syncing to preserve modified at times.
     */
    providedMtime?: pulumi.Input<string>;
    /**
     * Region location
     */
    region?: pulumi.Input<string>;
    /**
     * File/Folder size
     */
    size?: pulumi.Input<number>;
    /**
     * Path to a file that will be read and uploaded.
     */
    source?: pulumi.Input<string>;
    /**
     * Are subfolders locked and unable to be modified?
     */
    subfoldersLocked?: pulumi.Input<boolean>;
    /**
     * Type: `directory` or `file`.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a File resource.
 */
export interface FileArgs {
    /**
     * Custom metadata map of keys and values. Limited to 32 keys, 256 characters per key and 1024 characters per value.
     */
    customMetadata?: any;
    /**
     * File MD5 checksum.
     */
    md5?: pulumi.Input<string>;
    /**
     * File/Folder path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000
     * characters.
     */
    path: pulumi.Input<string>;
    /**
     * Bookmark/priority color of file/folder
     */
    priorityColor?: pulumi.Input<string>;
    /**
     * File last modified date/time, according to the client who set it. Files.com allows desktop, FTP, SFTP, and WebDAV
     * clients to set modified at times. This allows Desktop<->Cloud syncing to preserve modified at times.
     */
    providedMtime?: pulumi.Input<string>;
    /**
     * File/Folder size
     */
    size?: pulumi.Input<number>;
    /**
     * Path to a file that will be read and uploaded.
     */
    source: pulumi.Input<string>;
}
